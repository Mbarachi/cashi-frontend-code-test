import { Sidebar } from "./sidebar/Sidebar";

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
    <div className="relative flex min-h-screen w-full">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
);
