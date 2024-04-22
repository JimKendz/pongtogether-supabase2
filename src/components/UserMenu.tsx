import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button, buttonVariants } from "@/components/ui/button"
import { CircleUser } from "lucide-react"
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerClient } from '@/utils/supabase'

export default async function UserMenu() {
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const signOut = async () => {
        'use server'

        const cookieStore = cookies()
        const supabase = createServerClient(cookieStore)
        await supabase.auth.signOut()
        return redirect('/login')
    }

    return user ? (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Hey, {user.email}!</DropdownMenuLabel> {/* Username muss noch dynamisch */}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="profil">
                        Profil
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="einstellungen">
                        Einstellungen
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Hilfe</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <form action={signOut}>
                        <button>
                            Logout
                        </button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
        : (
            <Link
                href="/login"
                className={buttonVariants({ variant: "default" })}
            >
                Login
            </Link>
        )
}