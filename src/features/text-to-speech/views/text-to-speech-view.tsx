import { SettingsPanel } from "../components/settings-panel";
import { TextToSpeechInputPanel } from "../components/text-to-speech-input-panel";
import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";

export default function TextToSpeechView() {
  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-screen flex-1 flex-col">
        <div className=" md:h-[60%] h-[90vh]">
          <TextToSpeechInputPanel  />
        </div>
         <VoicePreviewPlaceholder />
      </div>
      <div>
        <SettingsPanel />
      </div>
    </div>
  );
}


