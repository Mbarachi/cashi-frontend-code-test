import { Database } from 'lucide-react';
import { SidebarNavItem } from './SidebarNavItem';
import { Home, Wallet, BarChart2, Settings, LogOut } from "lucide-react";

export const Sidebar: React.FC = () => (
    <aside className="flex h-screen min-h-full w-64 flex-col justify-between border-r border-border-light bg-surface-light p-4 sticky top-0">
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 px-3 py-2 text-text-light-primary">
                <Database />
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">FinTrack</h2>
            </div>
            <nav className="flex flex-col gap-2">
                <SidebarNavItem icon={Home} label="Dashboard" active href="#" />
                <SidebarNavItem icon={Wallet} label="Accounts" href="#" />
                <SidebarNavItem icon={BarChart2} label="Reports" href="#" />
                <SidebarNavItem icon={Settings} label="Settings" href="#" />
            </nav>
        </div>

        <div className="flex flex-col gap-4">
            <div className="border-t border-border-light pt-4">
                <SidebarNavItem icon={LogOut} label="Log Out" href="#" />
            </div>
            <div className="flex gap-3 items-center">
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhYSBKyOTh1HJ3h2PxF0Ktakwa2Gbq7jn3CYvxL1nHnKfNm9wL9hIV803qks-trprvQQOAjfWSpugsuUO-J3mRZsQ4xHzO-_2IaX-T8kDtg5XEL5ruV9Veafmcm6gT_ajZIDdyUVTfIo9oGZRGH4aPKfbGz2h9CMgqRTsRWyC0AaYiQdUnveb0o3Ke0ki3wOzDCXK3pQLTeIvgbL39V6MXybXMJmxOHsQNmiTrY_3q3wF-n0fEpnK8bOQCP8VtvTBIEW0QG1cEmBo")',
                    }}
                ></div>
                <div className="flex flex-col">
                    <h1 className="text-text-light-primary text-sm font-semibold leading-normal">Alex Doe</h1>
                    <p className="text-text-light-secondary text-xs font-normal leading-normal">alex.doe@email.com</p>
                </div>
            </div>
        </div>
    </aside>
);