import { GanttChartSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";

export default function SpielplanCard() {


    return (
        <Card className="xl:col-span-3 flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Spielplan
                </CardTitle>
                <GanttChartSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-row justify-between align-bottom">
                <div className="flex flex-row items-center gap-4 md:gap-8">
                    <div className="font-medium flex flex-col">
                        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-bold self-end">Halbe Orga</p>
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-medium text-muted-foreground">
                            Jim & Louis
                        </p>
                    </div>

                    <Avatar className="h-9 w-9 flex justify-center align-center bg-muted rounded-full text-center">
                        <p className="text-lg self-center text-slate-100">vs</p>
                    </Avatar>

                    <div className="font-medium flex flex-col">
                        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-bold self-end">Kneipenterroristen</p>
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-medium text-muted-foreground">
                            Luca & Skinny
                        </p>
                    </div>
                </div>

                <Button className="self-end">Alle Spiele</Button>
            </CardContent>
        </Card>
    )
}