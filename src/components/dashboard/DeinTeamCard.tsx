import { HeartHandshake, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AvatarIcon } from "@radix-ui/react-icons";

export default function DeinTeamCard() {


    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>
                    Dein Team
                </CardTitle>
                <HeartHandshake className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex flex-row items-center gap-4">
                    <Avatar className="h-9 w-9 flex justify-center align-center bg-muted rounded-full">
                        <Users className="h-4 w-4 self-center text-slate-100" />
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-2xl font-bold">
                            Halbe Orga
                        </p>
                    </div>
                    <div className="ml-auto font-medium text-end">
                        <p className="text-sm font-medium text-muted-foreground">
                            Jim
                        </p>
                        <p className="text-sm font-medium text-muted-foreground">
                            Louis
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}