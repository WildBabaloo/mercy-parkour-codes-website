import NavBarUI from "@/components/ui/NavBar";
import DifficultyKey from "./difficulty-key";
import TawEditor from "@/app/extras/taw-editor";
import PeaceEditor from "@/app/extras/peace-editor";
import GigaEditor from "@/app/extras/giga-editor";

export default function Extras() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        <div className="text-center m-6 text-3xl text-white font-bold">
          <h1>Extras</h1>
        </div>
        <div>
          <DifficultyKey />
        </div>
        <div>
          <TawEditor />
          <PeaceEditor />
          <GigaEditor />
        </div>
      </div>
    </>
  );
}
