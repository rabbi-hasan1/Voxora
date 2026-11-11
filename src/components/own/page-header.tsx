import { Bell, Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button"; 
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
export function PageHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-center justify-between border-b px-4 py-4 ",
        className,
      )}
    >
      <div className="flex flex-center items-center gap-2">
        <SidebarTrigger />
        <h1 className="md:text-lg text-balance font-semibold tracking-tight">{title}</h1>
      </div>
      <div className="flex flex-center gap-3">
        <Button variant="outline" size="sm" >
          <Link href="mailto:rabbi.builds@gmail.com" className="flex flex-row gap-1 items-center">
            <ThumbsUp />
            <span className="hidden lg:block">FeedBack</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm">
          <Link href="mailto:rabbi.builds@gmail.com" className="flex flex-row gap-1 items-center">
            <Headphones />
            <span className="hidden lg:block">FeedBack</span>
          </Link>
        </Button>

         <Button variant="outline" size="sm">
          <Link href="mailto:rabbi.builds@gmail.com" className="flex flex-row gap-1 items-center">
            <Bell />
            <span className="hidden lg:block">Notifications</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
