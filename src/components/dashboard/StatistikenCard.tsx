import { LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function StatistikenCard() {


    return (
        <Card className="xl:col-span-2 flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Statistiken
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-row justify-between align-bottom">
                <div>
                    <p className="text-2xl font-bold">
                        Team Turbo
                    </p>
                    <p className="text-xs text-muted-foreground">
                        ... hat bisher am meisten getrunken
                    </p>
                </div>

                <Button className="self-end">Mehr Statistiken</Button>
            </CardContent>
        </Card>
    )
}