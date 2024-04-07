import { Button } from "@/components/ui/button";
import React from "react";
import ClinicsCard from "./components/ClinicsCard";

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
                    <Button>
                        Add a clinic
                    </Button>
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