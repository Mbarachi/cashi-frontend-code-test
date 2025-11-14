import type { LucideIcon } from "lucide-react";

interface SidebarNavItemProps {
    icon: LucideIcon;
    label: string;
    active?: boolean;
    href: string;
    onClick?: () => void;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ icon: Icon, label, active, href, onClick }) => (
    <a
        href={href}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${active ? 'bg-primary/20 text-primary' : 'text-text-light-secondary hover:bg-gray-100'
            }`}
        onClick={onClick}
    >
        <Icon className="w-5 h-5" />
        <p className="text-sm font-medium">{label}</p>
    </a>
);