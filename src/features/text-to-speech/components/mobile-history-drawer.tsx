"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { History } from "lucide-react";
import { SettingPanelHistory } from "./settings-panel-history";

export function MobileHistoryDrawer() {
  return (
    <Drawer showSwipeHandle modal>
      <DrawerTrigger
        render={
          <Button variant="outline" size="icon">
            <History />
          </Button>
        }
      />
      <DrawerContent className="p-2">
        <DrawerHeader>
          <DrawerTitle>Your recent work</DrawerTitle>
        </DrawerHeader>
        <SettingPanelHistory />
      </DrawerContent>
    </Drawer>
  );
}
