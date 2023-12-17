import { cn } from "@/lib/utils"
import { Button } from "@/components/form-elements/button"
import { Link } from "@tanstack/react-router";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    pages?: {
        name: string;
        href: string;
        icon: React.ReactNode;
    }[];

}

export function Sidebar({ className, pages }: SidebarProps) {
    return (
        <div className={cn("pb-12 w-2/12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Store
                    </h2>
                    <div className="space-y-1">
                        <Link to={`/stores`}>
                            <Button variant="secondary" className="w-full justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 h-4 w-4"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polygon points="10 8 16 12 10 16 10 8" />
                                </svg>
                                View all
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}