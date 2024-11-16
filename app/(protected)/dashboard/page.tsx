"use client";
import { useContext } from "react";
import { OrganizationContext } from "@/contexts/OrganizationContext";

export default function Dashboard() {
  const { organization } = useContext(OrganizationContext)

  return (
    <div className="max-w-7xl flex flex-col gap-12 items-start">
      Welcome to {organization?.name} Dashboard!
      <div>
        Today's Schedule
      </div>
      <div>
        Future Schedule
      </div>
      <div>
        Statistics
      </div>
    </div>
  );
}
