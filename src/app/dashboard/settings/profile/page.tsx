import DashboardLayout from "../../DashboardLayout";
import ProfilePage from "../../components/Clinics"
import Link from "next/link";
import React from "react";

const Clinic = () => {
    return(
        <DashboardLayout>
            <ProfilePage />
        </DashboardLayout>
    )
}

export default Clinic