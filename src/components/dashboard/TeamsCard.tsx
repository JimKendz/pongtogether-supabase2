import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";


export default function TeamsCard() {


    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>
                    Teams
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-row justify-between align-bottom">
                <p className="text-2xl font-bold self-end">100 / 100</p>
                <Button>Zu den Teams</Button>
            </CardContent>
        </Card>
    )
}