import { useAppDispatch } from "./Store/hooks";
import { createNew, setStatus} from "./Store/States/tabSlice";
import { useAppSelector } from "./Store/hooks";
import { text } from "./TextEditor";
const Nav = () => {
  const dispatch = useAppDispatch();
  const { isNewTab } = useAppSelector((state) => state.tab);
  const saveFile =async() => {
   const res=await  window.ipcRenderer.invoke('save-file', text)
   if(res.status==='success'){
     dispatch(setStatus({saved:true,error:null}))
    }
    else{
      dispatch(setStatus({saved:false,error:res.message}))
    }

  };
  const createFile = () => {
    dispatch(createNew());
  };
  return (
    <>
      <ul className=" hidden md:block menu bg-base-200  md:row-span-2 w-full ">
        <li>
          <details >
            <summary>File</summary>
            <ul>
              <li
                onClick={createFile}
                className={`${
                  isNewTab ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <a>New</a>
              </li>
              <li>
                <a>Open</a>
              </li>
              <li onClick={saveFile}>
                <a>Save</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary>Edit</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <div className="drawer md:hidden h-8 absolute w-fit   px-2 z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle cursor-pointer" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" drawer-button h-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              className="fill-white"
            >
              <path d="M24,3.5c0,.83-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H22.5c.83,0,1.5,.67,1.5,1.5ZM6.5,20H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H6.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5ZM14.5,11H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H14.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z" />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="md:hidden menu bg-base-200  md:row-span-2 w-80 h-svh p-4">
        <li>
          <details >
            <summary>File</summary>
            <ul>
              <li
                onClick={createFile}
                className={`${
                  isNewTab ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <a>New</a>
              </li>
              <li >
                <a>Open</a>
              </li>
              <li onClick={saveFile}>
                <a>Save</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary>Edit</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
