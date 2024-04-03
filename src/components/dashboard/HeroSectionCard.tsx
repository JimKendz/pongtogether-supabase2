import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    ArrowUpRight,
} from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image"

export default function HeroSectionCard() {


    return (
        <Card className="group lg:col-span-2 xl:col-span-5 overflow-hidden h-[60vh]">
            <Image src="/HeroBG2.jpg" width="2048" height="1536" alt="Hero Section Background" className="object-cover h-full w-full brightness-50 hover:blur-none group-hover:scale-110 transition-all duration-500" />

            <CardContent className="absolute top-[40%] translate-y-[-50%]">
                <CardTitle className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-8xl">PongTogether</CardTitle>
                <CardTitle className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-7xl">Summer Cup 2023</CardTitle>
                <CardDescription className="text-2xl text-foreground">23. Mai in Berlin</CardDescription>
            </CardContent>
        </Card>
    )
}