import "../shadcn.css";
import DashboardLayout from "./DashboardLayout";
import Home from "./Home"
import Clinics from "./Clinics";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Clinics />
    </DashboardLayout>
  );
}
