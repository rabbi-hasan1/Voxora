import { TextToSpeechLayout } from "@/features/text-to-speech/views/text-to-speech-layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:"Text to speech",
  description:"Convert your text into natural-sounding speech with Voxora's text-to-speech tools."
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <TextToSpeechLayout>{children}</TextToSpeechLayout>
    </main>
  );
}
