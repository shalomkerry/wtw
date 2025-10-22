import { tags } from "../constants"
import { cn } from "../lib/utils";
import { creators } from "../constants";
import userSVg from '../assets/users.svg'
import tagSvg from '../assets/tag.svg'
interface VideoFilterProp{
    selectedTag: string | null;
    selectedCreator:string|null;
    setSelectedTag: (tag: string| null) =>void
    setCreator:(creator:string | null) =>void
}
export function FilterVideos({selectedTag,selectedCreator,setCreator,setSelectedTag}:VideoFilterProp){
const isActive = (value:string,type:'tag'|'creator')=>{
    if(type ==='tag'){
    return selectedTag === value?"bg-white text-black text-base" :"hover:text-white"
    }

   else if(type ==='creator'){
    return selectedCreator === value?"bg-white text-black text-base" :"hover:text-white"
    }
}

const isAllActive = (type:'tag'|'creator')=>{

    if(type === 'tag'){
    return selectedTag === null ?"bg-white text-black" :"hover:text-white"
    }

   else if(type ==='creator'){

    return selectedCreator === null?"bg-white text-black text-base" :"hover:text-white"
    }
}

    return(
        <>
  <div className="flex flex-col-reverse items-center justify-center ">
    <div className='flex justify-center flex-wrap gap-4 w-[400px] px-2'>
        <button onClick={()=>{setSelectedTag(null)}} className={cn(`text-sm text-[#85868d] p-1 rounded-md cursor-pointer duration-500 w-7`,isAllActive('tag'))}><img src={tagSvg} alt="" />
        </button>
      {
        tags && tags.map((tag)=>(

        <button key={tag.id} onClick={()=>setSelectedTag(tag.title)} className={cn(
            `text-sm text-[#85868d] rounded-md cursor-pointer duration-500 p-1`,isActive(tag.title,'tag')
        )}>{tag.title}</button>
        ))
      }
    </div>

    <div className='flex flex-wrap justify-center mb-4 gap-4 lg:flex-nowrap max-w-[1000px] mx-auto px-2'>

        <button onClick={()=>{setCreator(null)}} className={cn(`text-sm text-[#85868d] p-1 rounded-md w-7 cursor-pointer duration-500`,isAllActive('creator'))}>
      <img src={userSVg} alt="" />
        </button>
      {
        creators && creators.map((creator)=>(

        <button key={creator.id} onClick={()=>setCreator(creator.name)} className={cn(
            `text-sm text-[#85868d] rounded-md cursor-pointer duration-500 p-1`,isActive(creator.name,'creator')
        )}>{creator.name}</button>
        ))
      }
    </div>
  </div>
        </>
    )
}