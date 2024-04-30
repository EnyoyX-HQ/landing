import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface CardProps {
    image: string;
    name: string;
    city: string;
    number: string;
    address: string;
    email: string;
    siteweb: string;
    insurances: string[];
}
const ClinicsCard: React.FC<CardProps> = ({ image, name, city, number, address, email, siteweb, insurances }) => {
    return (
        <Card className="w-[350px] m-auto">
            <CardHeader>
                <CardTitle>
                    <Image src={image} alt="image" width="300" height="100" />
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xs">Clinic info</p>
                        <p className="text-xs">...</p>
                    </div>
                </CardTitle>
                <CardContent className="p-0">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xs">{name}</p>
                        <p className="text-xs">{number}</p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xs">{city}</p>
                        <p className="text-xs">{address}</p>
                    </div>
                    <div>
                        <p className="text-xs">{email}</p>
                        <p className="text-xs">{siteweb}</p>
                    </div>
                    <p className="text-sm font-semibold mt-4">insurances</p>
                    <ul>
                        <div className="flex flex-row flex-wrap items-center">
                            {insurances.map((insurance) => (
                                    <Badge key={insurance} className="" style={{borderRadius: "5px", marginRight: "5px"}}>{insurance}</Badge>
                            ))}
                        </div>
                    </ul>
                </CardContent>
            </CardHeader>
        </Card>
    )
}

export default ClinicsCard