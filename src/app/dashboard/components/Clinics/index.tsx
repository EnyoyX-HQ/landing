import { Button } from "@/components/ui/button";
import React from "react";
import ClinicsCard from "./components/ClinicsCard";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ComboboxPopover from "./components/ComboBoxResponsive";

const Clinics: React.FC = () => {
    const image = 'https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=800';
    const name = 'Ma carte';
    const city = 'Abidjan';
    const number = '+225 0709483463';
    const address = 'gestoci, nouveau chu';
    const email = 'cliniqueangre@gmail.com';
    const siteweb = 'cliniqueangre.ci';
    const insurances = ['Assurance 1', 'Assurance 2', 'Assurance 3']
    return (
        <div>
            <div className="flex items-center">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-lg font-semibold md:text-2xl mb-6">Clinics</h1>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button>
                                Edit Profile
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="mb-6">Add a new clinic</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <div className="flex flex-row justify-between items-center mb-4">
                                        <div className="flex flex-col">
                                            <Label htmlFor="clinic" className="mb-3">Clinic</Label>
                                            <Input type="email" placeholder="Enter clinic name" />
                                        </div>
                                        <div className="flex flex-col">
                                            <Label htmlFor="phonenumber" className="mb-3">Phone number</Label>
                                            <Input type="number" placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center mb-4">
                                        <div className="flex flex-col">
                                            <Label htmlFor="clinic" className="mb-3">Location</Label>
                                            <Input type="text" placeholder="Enter clinic location" />
                                        </div>
                                        <div className="flex flex-col">
                                            <Label htmlFor="website" className="mb-3">Clinique Website</Label>
                                            <Input type="text" placeholder="ex: myclinic.com" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Label htmlFor="address" className="">Exact address</Label>
                                        <Input type="text" className="mt-3" placeholder="Enter exact address" />
                                    </div>
                                    <div className="mb-4">
                                        <Label htmlFor="address" className="mb-3">Insurance (Optional)</Label>
                                        <ComboboxPopover />
                                    </div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
            <div className="w-full flex flex-row mt-5">
                <ClinicsCard
                    image={image}
                    name={name}
                    city={city}
                    number={number}
                    address={address}
                    email={email}
                    siteweb={siteweb}
                    insurances={insurances}
                />
            </div>
        </div>
    )
}

export default Clinics