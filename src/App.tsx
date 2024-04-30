import "./App.css";
import Nav from "./Nav";
import TextEditor from "./TextEditor";
import { useAppSelector } from "./Store/hooks";
function App() {
  const {currentTab,isNewTab} = useAppSelector(state=>state.tab)
  return (
    <div className="h-svh  grid  relative md:grid-cols-[1fr_4fr] grid-cols-1">
      <Nav/>
      <h6 className="flex items-center relative  h-8  w-[calc(100%-36px)] left-9 border-b border-slate-500 "><span className=" px-2 bg-white text-slate-800 block h-full w-fit ">
      {isNewTab?"Untitled":currentTab}</span></h6>
      <TextEditor/>
    </div>
  );
}

export default App;
