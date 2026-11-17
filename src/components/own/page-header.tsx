import { Bell} from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { AvatarDropdown } from "./user-button";
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
        "flex flex-center justify-between border-b px-4 py-3 ",
        className,
      )}
    >
      <div className="flex flex-center items-center gap-1">
        <SidebarTrigger />
        <h1 className=" text-balance font-semibold tracking-tight">{title}</h1>
      </div>
      <div className="flex flex-center gap-3 items-center">
        <Button variant="outline" size="sm" className="py-4">
          FeedBack
        </Button>

        <Button variant="outline" size="default">
          <Bell />
        </Button>

        <AvatarDropdown />
      </div>
    </div>
  );
}
