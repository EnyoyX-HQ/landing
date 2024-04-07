import "../shadcn.css";
import DashboardLayout from "./DashboardLayout";
import Home from "./Home"
import Clinics from "./Clinics";
import Invoice from "./Invoice";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Invoice />
    </DashboardLayout>
  );
}
