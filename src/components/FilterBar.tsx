import { tags } from "../constants"
import { cn } from "../lib/utils";
import { creators } from "../constants";
import userSVg from '../assets/users.svg'
import tagSvg from '../assets/tag.svg'
import tagWhite from '../assets/tag-white.svg'
import userWhite from '../assets/users-white.svg'
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
    return selectedCreator === value?"bg-white hover:underline hover:text-[#45a7db] text-black text-base text-center text-[16px]" :"hover:text-white"
    }
}

const isAllActive = (type:'tag'|'creator')=>{

    if(type === 'tag'){
    return selectedTag === null ?"bg-white text-black" :"hover:text-white"
    }

   else if(type ==='creator'){

    return selectedCreator === null?"bg-white duration-500 text-black text-base" :"hover:text-white"
    }
}

    return(
        <>
  <div className="flex flex-col-reverse items-center justify-center  ">
    <div className='flex justify-center flex-wrap gap-4 w-[400px] px-2'>
        <button onClick={()=>{setSelectedTag(null)}} className={cn(`text-sm text-[#85868d] p-1 rounded-md cursor-pointer w-7`,isAllActive('tag'))}><img src={selectedTag?tagWhite:tagSvg} alt="" />
        </button>
      {
        tags && tags.map((tag)=>(

        <button key={tag.id} onClick={()=>setSelectedTag(tag.title)} className={cn(
            `text-sm text-[#85868d] rounded-md cursor-pointer duration-500 p-1`,isActive(tag.title,'tag')
        )}>{tag.title}</button>
        ))
      }
    </div>

    <div className='flex flex-wrap justify-center mb-4 gap-4 lg:flex-nowrap max-w-[1209px] mx-auto px-2'>

        <button onClick={()=>{setCreator(null)}} className={cn(`text-sm text-[#85868d] p-1 rounded-md w-7 cursor-pointer`,isAllActive('creator'))}>
      <img src={selectedCreator?userWhite:userSVg} alt="" />
        </button>
      {
        creators && creators.map((creator)=>{
          const isSelected = creator.name === selectedCreator
          return(
            <a href={isSelected?creator.link:'#'}
            key={creator.id}
            onClick={(e)=>{
              if(!isSelected){
               e.preventDefault() 
               setCreator(creator.name)
              }
            }} 
            target={isSelected?'_blank':undefined}
            rel={isSelected?'noopener noreferrer':undefined}
            className={cn("text-sm text-[#85868d] rounded-md cursor-pointer duration-500 p-1",isActive(creator.name,'creator'))}
            >
              {creator.name}</a>
          ) 
          
})
      }
    </div>
  </div>
        </>
    )
}