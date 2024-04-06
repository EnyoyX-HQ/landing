import Link from "next/link";
import {
  Bell,
  CircleUser,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart, Paperclip, Store,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import "../shadcn.css";
import DashboardLayout from "./DashboardLayout";
import Home from "./Home"
import Clinics from "./Clinics";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Home />
    </DashboardLayout>
  );
}
