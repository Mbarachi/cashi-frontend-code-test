import React from "react";
import { Menu } from "lucide-react";

interface HeaderProps {
    onToggleSidebar?: () => void;
    pageTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, pageTitle }) => (
    <header className="flex items-center justify-between bg-white border-b border-border-light p-4  md:hidden sticky top-0 z-20">
        <div className="flex items-center gap-4">
            {/* Hamburger for mobile */}
            {onToggleSidebar && (
                <button className="md:hidden p-2" onClick={onToggleSidebar}>
                    <Menu className="w-6 h-6 text-text-light-primary" />
                </button>
            )}

            {/* Page title */}
            {pageTitle && <h1 className="text-lg font-semibold">{pageTitle}</h1>}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-4">
            {/* Example: user avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200" />
        </div>
    </header>
);