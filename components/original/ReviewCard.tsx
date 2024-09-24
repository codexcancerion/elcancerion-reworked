import { cn } from "@/lib/utils";

export default function ReviewCard({
    secretName,
    secretEmail,
    secretMessage,
}: {
    secretName: string;
    secretEmail: string;
    secretMessage: string;
}) {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {secretName}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{secretEmail}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{secretMessage}</blockquote>
        </figure>
    );
};