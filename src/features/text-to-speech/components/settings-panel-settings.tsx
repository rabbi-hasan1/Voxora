
"use client";

import { sliders } from "../data/sliders";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export function SettingsPanelSettings() {
  return (
    <>
      {/* Voice Style Dropdown Section */}
      <div className="border-b border-dashed p-4">
        <p className="text-sm text-muted-foreground">
          Voice selector coming soon
        </p>
      </div>

      {/* Voice Adjustments Section */}
      <div className="flex-1 p-4">
        <FieldGroup className="gap-8">
          {sliders.map((slider) => (
            <Field key={slider.id}>
              <FieldLabel htmlFor={slider.id}>
                {slider.label}
              </FieldLabel>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {slider.leftLabel}
                </span>

                <span className="text-xs text-muted-foreground">
                  {slider.rightLabel}
                </span>
              </div>

              <Slider
                id={slider.id}
                defaultValue={[slider.min]}
                min={slider.min}
                max={slider.max}
                step={slider.step}
                className="**:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-thumb]:bg-foreground **:data-[slot=slider-track]:h-1"
              />
            </Field>
          ))}
        </FieldGroup>
      </div>
    </>
  );
}
