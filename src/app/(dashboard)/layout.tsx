import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const Layout = ( {children} : Props ) => {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen">
                <DashboardSidebar />
                <main className="flex flex-col flex-1 bg-muted">{children}</main>
            </div>
        </SidebarProvider>
    )
}

export default Layout;