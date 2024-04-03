import { Book } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function RegelwerkCard() {


    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Regelwerk</CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-row justify-between align-bottom">
                <p className="text-2xl font-bold self-end">BBPG v1.3</p>
                <Button>Zum Regelwerk</Button>
            </CardContent>
        </Card>
    )
}