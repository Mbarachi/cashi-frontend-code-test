import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
    children?: React.ReactNode;
    pageTitle?: string;
}

export const AppLayout: React.FC<AppLayoutProps> = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Main content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <main className="flex-1 overflow-auto p-10"> <Outlet /> </main>
            </div>
        </div>
    );
};
