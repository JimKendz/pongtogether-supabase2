'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Home,
    LineChart,
    Package2,
    Settings,
    Users2,
    User2,
    Trophy,
    Bell,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import ThemeToggle from "./ThemeToggle";

/* const NavLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Blog', path: '/blog' },
    { id: 3, name: 'About', path: '/about' },
]; */

export default function SideBar() {
    const pathname = usePathname();
    console.log("pathname = ", pathname)
    const isActive = (path: String) => path === pathname;

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">PongTogether</span>
                </Link>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/"
                                className={isActive("/") ? 'active flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground bg-accent transition-colors md:h-8 md:w-8'
                                    : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'}
                            >
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Home</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Home</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="turniere"
                                className={isActive("/turniere") ? 'active flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground bg-accent transition-colors md:h-8 md:w-8'
                                    : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'}
                            >
                                <Trophy className="h-5 w-5" />
                                <span className="sr-only">Turniere</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Turniere</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/spieler"
                                className={isActive("/spieler") || isActive("/profil") ? 'active flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground bg-accent transition-colors md:h-8 md:w-8'
                                    : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'}
                            >
                                <User2 className="h-5 w-5" />
                                <span className="sr-only">Spieler</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Spieler</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/teams"
                                className={isActive("/teams") ? 'active flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground bg-accent transition-colors md:h-8 md:w-8'
                                    : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'}
                            >
                                <Users2 className="h-5 w-5" />
                                <span className="sr-only">Teams</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Teams</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/statistiken"
                                className={isActive("/statistiken") ? 'active flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground bg-accent transition-colors md:h-8 md:w-8'
                                    : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'}
                            >
                                <LineChart className="h-5 w-5" />
                                <span className="sr-only">Statistiken</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Statistiken</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'
                            >
                                <ThemeToggle />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="right">Light / dark mode</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/benachrichtigungen"
                                className={isActive("/benachrichtigungen") ? 'active flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground bg-accent transition-colors md:h-8 md:w-8'
                                    : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'}
                            >
                                <Bell className="h-5 w-5" />
                                <span className="sr-only">Benachrichtigungen</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Benachrichtigungen</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/einstellungen"
                                className={isActive("/einstellungen") ? 'active flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground bg-accent transition-colors md:h-8 md:w-8'
                                    : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-accent md:h-8 md:w-8'}
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Einstellungen</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Einstellungen</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}