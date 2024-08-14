import Link from "next/link"
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    ListFilter,
    MoreVertical,
    Truck,
    CircleUser,
    Activity,
    ArrowUpRight,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import MobileNavDrawer from "@/components/MobileNavDrawer"
import UserMenu from "@/components/UserMenu"
import HeroSectionCard from "@/components/dashboard/HeroSectionCard"
import SpielplanCard from "@/components/dashboard/SpielplanCard"
import StatistikenCard from "@/components/dashboard/StatistikenCard"
import TeamsCard from "@/components/dashboard/TeamsCard"
import DeinTeamCard from "@/components/dashboard/DeinTeamCard"
import RegelwerkCard from "@/components/dashboard/RegelwerkCard"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BentoDemo } from "@/components/dashboard/Bento"

export default function Dashboard() {
    return (
        <ScrollArea>
            <div className="flex lg:h-screen w-full flex-col bg-muted/40 rounded-l-2xl">
                <div className="flex flex-col sm:gap-4 sm:pt-4 sm:pl-14 md:pt-8 h-full">
                    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-8">
                        <MobileNavDrawer />
                        <Breadcrumb className="hidden md:flex">
                            <BreadcrumbList>
                                {/* <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="#">Dashboard</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator /> */}
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/turniere">Turniere</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        {/* <div className="relative ml-auto flex-1 md:grow-0">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                            />
                        </div> */}
                        <div className="relative ml-auto">
                            <UserMenu />
                        </div>
                    </header>

                    <BentoDemo />

                    <main className="flex flex-1 flex-col gap-4 px-4 pb-4 md:gap-8 md:px-8 md:pb-8 h-full w-full">
                        <div className="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-7 lg:h-[60vh] xl:h-[60vh]">
                            <HeroSectionCard />
                            <div className="lg:col-span-1 xl:col-span-2 grid gap-4">
                                <TeamsCard />
                                <DeinTeamCard />
                                <RegelwerkCard />
                            </div>
                        </div>
                        <div className="grid gap-4 xl:grid-cols-5 md:gap-8 flex-1">
                            <SpielplanCard />
                            <StatistikenCard />
                        </div>
                    </main>
                </div>
            </div>
        </ScrollArea>
    )
}
