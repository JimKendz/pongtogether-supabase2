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
    Users,
    LineChart,
    Swords,
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
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export default function Turniere() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <MobileNavDrawer />
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            {/* <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/turniere">Turniere</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator /> */}
                            <BreadcrumbItem>
                                <BreadcrumbPage>Turniere</BreadcrumbPage>
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
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <Tabs defaultValue="alle">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="alle">Alle</TabsTrigger>
                                    <TabsTrigger value="aktuell">Aktuell</TabsTrigger>
                                    <TabsTrigger value="abgeschlossen">Abgeschlossen</TabsTrigger>
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
                            <TabsContent value="alle">
                                <Card>
                                    <CardHeader className="px-7">
                                        <CardTitle>Turniere</CardTitle>
                                        <CardDescription>
                                            Hier siehst du alle aktuellen und abgeschlossenen Turniere.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Name</TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Teilnehmer
                                                    </TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Status
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Datum
                                                    </TableHead>
                                                    <TableHead className="text-right">Teilnehmer</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Cup 2024</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        0 / 100
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="secondary">
                                                            Aktuell
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        02-11-2024
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Winter Cup 2023</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        100 / 100
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            Abgeschlossen
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        18-11-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Summer Cup 2023</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        80 / 80
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            Abgeschlossen
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Spring Cup 2023</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        64 / 64?
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            Abgeschlossen
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="aktuell">
                                <Card>
                                    <CardHeader className="px-7">
                                        <CardTitle>Turniere</CardTitle>
                                        <CardDescription>
                                            Hier siehst du alle aktuellen Turniere.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Name</TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Teilnehmer
                                                    </TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Status
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Datum
                                                    </TableHead>
                                                    <TableHead className="text-right">Links</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="hover:cursor-pointer">
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Cup 2024</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        0 / 100
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="secondary">
                                                            Aktuell
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        02-11-2024
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="abgeschlossen">
                                <Card>
                                    <CardHeader className="px-7">
                                        <CardTitle>Turniere</CardTitle>
                                        <CardDescription>
                                            Hier siehst du alle abgeschlossenen Turniere.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Name</TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Teilnehmer
                                                    </TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Status
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Datum
                                                    </TableHead>
                                                    <TableHead className="text-right">Teilnehmer</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Winter Cup 2023</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        100 / 100
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            Abgeschlossen
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        18-11-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Summer Cup 2023</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        80 / 80
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            Abgeschlossen
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">PongTogether Spring Cup 2023</div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        64 / 64?
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge className="text-sm font-normal" variant="outline">
                                                            Abgeschlossen
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        XX-XX-2023
                                                    </TableCell>
                                                    <TableCell className="flex gap-2 justify-end align-middle">
                                                        <TooltipProvider>
                                                            <Link
                                                                href="/dashboard"
                                                                className={buttonVariants({ variant: "default", size: "lg", className: "group flex h-10 items-center justify-center px-[12px]" })}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Swords className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Spielplan
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/dashboard"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <Users className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Teams
                                                                </TooltipContent>
                                                            </Tooltip>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Link
                                                                        href="/statistiken"
                                                                        className={buttonVariants({ variant: "default", size: "icon", className: "group flex h-10 w-10 items-center justify-center" })}
                                                                    >
                                                                        <LineChart className="h-6 w-6 transition-all group-hover:scale-110" />
                                                                    </Link>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    Statistiken
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
            </div>
        </div>
    )
}
