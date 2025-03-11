import type { LucideIcon } from "lucide-react"

interface PageHeaderProps {
    icon: LucideIcon
    title: string
    description?: string
}

export function PageHeader({ icon: Icon, title, description }: PageHeaderProps) {
    return (
        <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            </div>
            {description && <p className="text-muted-foreground">{description}</p>}
        </div>
    )
}

