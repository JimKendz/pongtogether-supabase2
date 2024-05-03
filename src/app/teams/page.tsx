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
    User,
    User2,
    Users2,
    LineChart,
    Swords,
    Plus,
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
import { Button, buttonVariants } from "@/components/ui/button"
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Teams() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <MobileNavDrawer />
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Teams</BreadcrumbPage>
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
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <Tabs defaultValue="deine">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="deine">Deine</TabsTrigger>
                                    <TabsTrigger value="alle">Alle</TabsTrigger>
                                </TabsList>
                                <div className="ml-auto flex items-center gap-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="h-7 gap-1 text-sm bg-card"
                                            >
                                                <ListFilter className="h-3.5 w-3.5" />
                                                <span className="sr-only sm:not-sr-only">Filter</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Filter nach</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuCheckboxItem checked>
                                                Noch
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>
                                                Nicht
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>
                                                Implementiert
                                            </DropdownMenuCheckboxItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    {/* <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-7 gap-1 text-sm"
                                    >
                                        <File className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only">Export</span>
                                    </Button> */}
                                </div>
                            </div>
                            <TabsContent value="deine">
                                <Card>
                                    <CardHeader className="px-7 flex flex-row space-between w-full">
                                        <div>
                                            <CardTitle>Deine Teams</CardTitle>
                                            <CardDescription className="mt-2">
                                                Hier kannst du deine Teams verwalten.
                                            </CardDescription>
                                        </div>
                                        <div className="ml-auto">
                                            <Link
                                                href="/dashboard"
                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                            >
                                                <Plus className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                Team erstellen
                                            </Link>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Teamname</TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Spieler
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Wappen
                                                    </TableHead>
                                                    <TableHead className="hidden lg:table-cell">
                                                        Zuletzt aktiv
                                                    </TableHead>
                                                    <TableHead className="text-right">Links</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Enua</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Marvin</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            VF
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        18-11-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Nasi Coseng</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Lando</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Benjamin Bierchen</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Vincent</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #2
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            HF
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2021
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Zitzenfritzen</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Vinzenz</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2019
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="alle">
                                <Card>
                                    <CardHeader className="px-7 flex flex-row space-between w-full">
                                        <div>
                                            <CardTitle>Alle Teams</CardTitle>
                                            <CardDescription className="mt-2">
                                                Hier siehst du alle registrierten Teams.
                                            </CardDescription>
                                        </div>
                                        <div className="ml-auto">
                                            <Link
                                                href="/dashboard"
                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                            >
                                                <Plus className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                Team erstellen
                                            </Link>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Teamname</TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Spieler
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Wappen
                                                    </TableHead>
                                                    <TableHead className="hidden lg:table-cell">
                                                        Zuletzt aktiv
                                                    </TableHead>
                                                    <TableHead className="text-right">Links</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Enua</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Marvin</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            VF
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        18-11-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Nasi Coseng</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Lando</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Benjamin Bierchen</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Vincent</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #2
                                                        </Badge>
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            HF
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2021
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Zitzenfritzen</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Vinzenz</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Jim</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2019
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Pizza LK</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">David</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Alicia</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #2
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Balls and Tits</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Vincent</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Lina</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        18-11-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Zen Pong</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Heiner</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Marius</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #3
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">Mahatma Gönndir</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Max</p>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <User2 className="h-4 w-4 mb-[1px]" />
                                                                <p className="ml-1">Nico</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            #1
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden lg:table-cell">
                                                        XX-XX-2022
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <Link
                                                            href="/dashboard"
                                                            className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                        >
                                                            <Users2 className="h-5 w-5 transition-all group-hover:scale-110 mr-2" />
                                                            Teamprofil
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="grid lg:col-span-1 relative h-full w-full">
                        <Card className="lg:fixed lg:col-span-1 flex flex-col">
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                                <div className="grid gap-0.5 mr-12">
                                    <CardTitle className="group flex items-center gap-2 text-2xl">
                                        Enua
                                    </CardTitle>
                                    <CardDescription>
                                        <div className="flex flex-row gap-4">
                                            <div className="flex flex-row">
                                                <User2 className="h-5 w-5" />
                                                <p className="ml-1">Marvin</p>
                                            </div>
                                            <div className="flex flex-row">
                                                <User2 className="h-5 w-5" />
                                                <p className="ml-1">Jim</p>
                                            </div>
                                        </ div>
                                    </CardDescription>
                                </div>
                                <div className="ml-auto flex items-center gap-1">
                                    <Button size="sm" variant="outline" className="h-8 gap-1">
                                        <Users2 className="h-3.5 w-3.5" />
                                        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                            Teamprofil
                                        </span>
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="outline" className="h-8 w-8">
                                                <MoreVertical className="h-3.5 w-3.5" />
                                                <span className="sr-only">More</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Not</DropdownMenuItem>
                                            <DropdownMenuItem>yet</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>implemented</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                                <div className="grid gap-3">
                                    <div className="font-semibold">Team Details</div>
                                    <ul className="grid gap-3">
                                        <li className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Turniere gespielt:
                                            </span>
                                            <span>2</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Spiele gespielt:
                                            </span>
                                            <span>12</span>
                                        </li>
                                    </ul>
                                </div>
                                <Separator className="my-4" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-3">
                                        <div className="font-semibold">Spieler</div>
                                        <div className="flex flex-row">
                                            <User2 className="h-5 w-5" />
                                            <p className="ml-1">Marvin</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <User2 className="h-5 w-5" />
                                            <p className="ml-1">Jim</p>
                                        </div>
                                    </div>
                                    <div className="grid auto-rows-max gap-3">
                                        <div className="font-semibold">Wappen</div>
                                        <div className="text-muted-foreground flex flex-row gap-1">
                                            <Badge variant="default">
                                                #1
                                            </Badge>
                                            <Badge variant="default">
                                                #1
                                            </Badge>
                                            <Badge variant="default">
                                                VF
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <Separator className="my-4" />
                                <div className="grid gap-3">
                                    <div className="font-semibold">Turnierhistorie</div>
                                    <dl className="grid gap-3">
                                        <div className="flex items-center justify-between">
                                            <dt className="">PongTogether Winter Cup</dt>
                                            <dd className="text-muted-foreground">VF</dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className="">PongTogether Summer Cup</dt>
                                            <dd className="text-muted-foreground">#1</dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className="">WePong Turnier 2015</dt>
                                            <dd className="text-muted-foreground">#1</dd>
                                        </div>
                                    </dl>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}
