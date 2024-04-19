// import { invoke } from "@tauri-apps/api/tauri";
import IMGGallery from "./img_gallery/IMGGallery";
import "./assets/css/App.css";

function App() {

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <IMGGallery />
  );
}

export default App;
