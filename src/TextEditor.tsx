import { useAppSelector } from "./Store/hooks"
export let text=""
const TextEditor = () => {
  const {currentTab} = useAppSelector(state=>state.tab)
  const updateText=(data:string)=>{
    text=data
  }
  return (
    <div className="h-[calc(100svh-2rem)] w-full  ">
      
       {
        currentTab!=="" ? (
          <textarea name="" id="" className="h-full w-full bg-slate-100 resize-none outline-none p-3"
          
          onChange={(e)=>{
            updateText(e.target.value)
          }}>
            
          </textarea>
        ):(
          <div className="h-full w-full flex justify-center items-center ">
            <h1 className="text-2xl">Create <b>New</b> file or <b>Open</b> a file</h1>
          </div>
        )
       }
    </div>
  )
}

export default TextEditor