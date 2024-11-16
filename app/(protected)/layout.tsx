import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { OrganizationProvider } from "@/contexts/OrganizationContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <OrganizationProvider>
        <AppSidebar />
        <div className="flex justify-start max-w-full w-full">
          {children}
        </div>
      </OrganizationProvider>
    </SidebarProvider>
  )
}