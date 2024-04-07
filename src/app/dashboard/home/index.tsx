import React from "react";
import CardComponent from "./components/Card";
import ChartGraphComponent from "./components/ChartGraph";

const Home = () => {
    return (
        <div>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl mb-4">Analytics overview</h1>
            </div>
            <div className="container mx-auto">
                <div>
                    <div className="flex flex-row flex-wrap mb-4">
                        <CardComponent
                            title="Recent invoices"
                        />
                        <CardComponent
                            title="Recent clinics"
                        />
                        <CardComponent
                            title="Recent insurances"
                        />
                    </div>
                </div>
                <>
                    <ChartGraphComponent />
                </>
            </div>
        </div>
    )
}

export default Home