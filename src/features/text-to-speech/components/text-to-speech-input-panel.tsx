"use client";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Coins } from "lucide-react";

import { TEXT_MAX_LENGTH, COST_PER_UNIT } from "../data/constants";
import { GenerateButton } from "./generate-button";

export function TextToSpeechInputPanel() {
  const [text, setText] = useState("");

  const isValid = text.trim().length > 0;

  const estimatedCost = (text.length * COST_PER_UNIT).toFixed(4);

  const handleSubmit = () => {
    if (!isValid) return;

    console.log(text);
  };

  return (
    <div className="relative flex h-full min-h-0 w-full min-w-0 flex-col">

      {/* Textarea */}
      <div className="relative min-h-0 min-w-0 flex-1">

        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="
            absolute inset-0
            h-full w-full
            resize-none
            border-0
            bg-transparent
            p-4 pb-8
            text-base
            leading-relaxed
            tracking-tight
            shadow-none
            wrap-break-word
            focus-visible:ring-0
            lg:p-6
            lg:pb-8
          "
          maxLength={TEXT_MAX_LENGTH}
        />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background to-transparent" />

      </div>

      {/* Mobile action bar */}
      <div
        className="
          fixed inset-x-0 bottom-0 z-50
          flex flex-col gap-3
          border-t
          bg-background
          p-4
          pb-[max(1rem,env(safe-area-inset-bottom))]
          lg:hidden
        "
      >

        {text.length > 0 && (
          <div className="flex items-center justify-between">

            <Badge variant="outline" className="gap-1.5 border-dashed">
              <Coins className="size-3 text-chart-5" />

              <span className="text-xs">
                <span className="tabular-nums">
                  ${estimatedCost}
                </span>
                &nbsp; estimated
              </span>
            </Badge>

            <p className="text-xs tracking-tight">
              {text.length.toLocaleString()}

              <span className="text-muted-foreground">
                &nbsp;/&nbsp;
                {TEXT_MAX_LENGTH.toLocaleString()} characters
              </span>
            </p>

          </div>
        )}

        <GenerateButton
         
          className="w-full p-5"
          disabled={!isValid}
          isSubmitting={false}
          onSubmit={handleSubmit}
        />

      </div>

      {/* Desktop action bar */}
      <div className="hidden shrink-0 items-center justify-between p-4 lg:flex lg:p-6">

        {text.length > 0 ? (
          <Badge variant="outline" className="gap-1.5 border-dashed">
            <Coins className="size-3 text-chart-5" />

            <span className="text-xs">
              <span className="tabular-nums">
                ${estimatedCost}
              </span>
              &nbsp; estimated
            </span>
          </Badge>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-3">

          <p className="text-xs tracking-tight">
            {text.length.toLocaleString()}

            <span className="text-muted-foreground">
              &nbsp;/&nbsp;
              {TEXT_MAX_LENGTH.toLocaleString()} characters
            </span>
          </p>

          <GenerateButton
            size="default"
            disabled={!isValid}
            isSubmitting={false}
            onSubmit={handleSubmit}
          />

        </div>

      </div>

    </div>
  );
}
