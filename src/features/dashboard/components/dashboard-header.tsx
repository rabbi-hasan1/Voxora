"use client";
import { Button } from "@/components/ui/button";

import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";
function DashboardHeader() {
  
  return (
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
          Nice to see you
        </p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          Md Rabbi
        </h1>
      </div>

      <div className="lg:flex flex-center gap-3 hidden">
        <Button variant="outline" size="sm">
          <Link href="mailto:rabbi.builds@gmail.com">
            <ThumbsUp />
            <span className="hidden lg:block">FeedBack</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm" >
          <Link href="mailto:rabbi.builds@gmail.com">
            <Headphones />
            <span className="hidden lg:block">FeedBack</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default DashboardHeader;
