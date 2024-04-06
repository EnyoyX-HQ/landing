"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function CardComponent({ title }) {
    const [progress, setProgress] = React.useState(13)
    return (
        <Card className="w-[350px] m-auto">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row w-full justify-between mb-4" style={{alignItems:"center"}}>
                    <p className="flex-2 text-sm">Clinique AB</p>
                    <Progress value={progress} style={{height: "10px"}} className="w-[60%]" />
                </div>
                <div className="flex flex-row w-full justify-between mb-4" style={{alignItems:"center"}}>
                    <p className="flex-2 text-sm">Clinique AB</p>
                    <Progress value={progress} style={{height: "10px"}} className="w-[60%]" />
                </div>
                <div className="flex flex-row w-full justify-between mb-4" style={{alignItems:"center"}}>
                    <p className="flex-2 text-sm">Clinique AB</p>
                    <Progress value={progress} style={{height: "10px"}} className="w-[60%]" />
                </div>
                <div className="flex flex-row w-full justify-between mb-4" style={{alignItems:"center"}}>
                    <p className="flex-2 text-sm">Clinique AB</p>
                    <Progress value={progress} style={{height: "10px"}} className="w-[60%]" />
                </div>
                <div className="flex flex-row w-full justify-between mb-4" style={{alignItems:"center"}}>
                    <p className="flex-2 text-sm">Clinique AB</p>
                    <Progress value={progress} style={{height: "10px"}} className="w-[60%]" />
                </div>
            </CardContent>
        </Card>
    )
}