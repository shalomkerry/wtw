import { tags } from "../constants"
import { cn } from "../lib/utils";

interface VideoFilterProp{
    selectedTag: string | null;
    setSelectedTag: (tag: string| null) =>void
}
export function FilterVideos({selectedTag,setSelectedTag}:VideoFilterProp){
const isActive = (tag:string)=>{
    return selectedTag === tag ?"bg-white text-black" :"hover:text-white"
}

const isAllActive = ()=>{
    return selectedTag === null ?"bg-white text-black" :"hover:text-white"
}

    return(
        <>
  <div className="flex items-center justify-center ">
    <div className='flex justify-center flex-wrap gap-4 w-[500px] px-2'>
        <button onClick={()=>{setSelectedTag(null)}} className={cn(`text-sm text-[#85868d] p-1 rounded-md cursor-pointer duration-500`,isAllActive())}>All</button>
      {
        tags && tags.map((tag)=>(

        <button key={tag.id} onClick={()=>setSelectedTag(tag.title)} className={cn(
            `text-sm text-[#85868d] rounded-md cursor-pointer duration-500 p-1`,isActive(tag.title)
        )}>{tag.title}</button>
        ))
      }
    </div>
  </div>
        </>
    )
}