"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Settings } from "lucide-react"
import { SettingsPanelSettings } from "./settings-panel-settings"

export function MobileSettingsDrawer() {
  return (
    <Drawer showSwipeHandle modal>
      <DrawerTrigger render={<Button variant="outline" size="icon"><Settings /></Button>} />
      <DrawerContent className="p-1">
        <DrawerHeader>
          <DrawerTitle>Configure your voice</DrawerTitle>
        </DrawerHeader>
        <SettingsPanelSettings />
      </DrawerContent>
    </Drawer>
  )
}
