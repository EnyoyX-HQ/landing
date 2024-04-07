import DashboardLayout from "../../DashboardLayout";
import ClinicProfile from "../../Clinics"
import Link from "next/link";
import React from "react";

const Clinic = () => {
    return(
        <DashboardLayout>
            <ClinicProfile />
        </DashboardLayout>
    )
}

export default Clinic