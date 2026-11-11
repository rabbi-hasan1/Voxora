import { VoiceCloningLayout } from "@/features/voice-cloning/view/voice-cloning-layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:"Voice cloning",
  description:"Create and manage custom AI voice clones for your projects and content."
};
export default function Layput({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <VoiceCloningLayout>{children}</VoiceCloningLayout>
    </main>
  );
}
