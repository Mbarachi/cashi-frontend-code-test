import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./sidebar/Sidebar";

interface AppLayoutProps {
    children: React.ReactNode;
    pageTitle?: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, pageTitle }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Main content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} pageTitle={pageTitle} />
                <main className="flex-1 overflow-auto p-4">{children}</main>
            </div>
        </div>
    );
};
