import type { LucideIcon } from "lucide-react";

interface SummaryCardProps {
    icon: LucideIcon;
    title: string;
    value: string;
    bgColor?: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ icon: Icon, title, value, bgColor = 'bg-primary/20' }) => (
    <div className="flex flex-col rounded-xl bg-surface-light p-5 border border-border-light">
        <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${bgColor} mb-4`}>
           <Icon />
        </div>
        <p className="text-text-light-secondary text-sm font-medium">{title}</p>
        <p className="text-text-light-primary text-2xl font-bold">{value}</p>
    </div>
);