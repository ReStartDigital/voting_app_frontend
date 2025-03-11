import { toast as sonnerToast, toast, type ToastT } from "sonner"

type ToastProps = {
    title?: string
    description?: string
    action?: {
        label: string
        onClick: () => void
    }
} & Omit<ToastT, "action">

export function useToast() {
    const toast = (props: ToastProps) => {
        const { title, description, action, ...rest } = props

        return sonnerToast(
            <div>
                {title && <div className="font-semibold">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
            </div>,
            {
                action: action
                    ? {
                        label: action.label,
                        onClick: action.onClick,
                    }
                    : undefined,
            ...rest,
            },
        )
        }

        return {
            toast,
            dismiss: sonnerToast.dismiss,
            error: (props: ToastProps) =>
                toast({ ...props, style: { backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" } }),
            success: (props: ToastProps) =>
                toast({ ...props, style: { backgroundColor: "var(--success)", color: "var(--success-foreground)" } }),
            warning: (props: ToastProps) =>
                toast({ ...props, style: { backgroundColor: "var(--warning)", color: "var(--warning-foreground)" } }),
            info: (props: ToastProps) =>
                toast({ ...props, style: { backgroundColor: "var(--info)", color: "var(--info-foreground)" } }),
        }
    }

        export { toast }

