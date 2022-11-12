import TopBar from "./components/header/TopBar";
import { SideBar } from "./components/navigation/sideBar";
import ListHorizontal from "./components/content/listHorizontal";
import ListVertical from "./components/content/listVertical";
import Bottom from "./components/navigation/bottom";
import "./styles/app.css"

function App() {
  return (
    <div className="app px-4 mx-auto min-w-full overflow-hidden">
      {/* <SideBar/> */}
      <TopBar />
      <ListHorizontal />
      <ListVertical />
      {/* <Bottom/> */}
    </div>
  );
}

export default App;
