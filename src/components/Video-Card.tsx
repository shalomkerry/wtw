import { type Videos } from "../types"
import { useState } from "react"
interface VideoCardProps{
    video:Videos
}
export const PopVideo:React.FC<VideoCardProps> = ({video})=>{
    const [isHovered,setIsHovered] = useState(false)

     if (!video) {
    return (
      <div className="p-4 text-center text-gray-400">
        No video available.
      </div>
    );
  }
    const formatViews = (views:number)=>{
        if(views >=1000000){
            return `${(views/1000000).toFixed(0)}M`
        }
        if(views>=1000){
            return `${(views/1000).toFixed(0)}K`
        }
        return `${views}`
    }
    const getRelativeTime = (dateString:string)=>{
        dateString = dateString.split(',').join('-')
        const date = new Date(dateString)
        const now = new Date()
        const diffTime = Math.abs(now.getTime()-date.getTime())
        const diffDays = Math.ceil(diffTime/(1000*60*60*24))
        if (diffDays<7){
            return `${diffDays} days ago`
        }
        if(diffDays<30){
            const weeks = Math.floor(diffDays/7)
            return`${weeks} ${(weeks>1)?'weeks ago':'week ago'}` 
        }
        if(diffDays<365){
            const months = Math.floor(diffDays/30)
            return`${months} ${(months>1)?'months ago':'month ago'}` 
        }
        else if(diffDays>365){
            const years = Math.floor(diffDays/365)
            
            return`${years} ${(years>1)?'years ago':'year ago'}` 
        }
    }
       const  getExactDuration = (duration:string)=>{
       const timearray = duration.split(':')
       const [hour, minute, second] = timearray
       if (hour=='0'){
        return (`${minute}:${second}`)
       }
       return duration
    }

    return(
        
        <div className="rounded-xl text-white shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor:pointer hover:"
        onMouseEnter= {()=>setIsHovered(true)} 
        onMouseLeave= {()=>setIsHovered(false)} 
        >
            <div className="relative">
                    <a href={`https://youtu.be/${video?.message}`} target="_blank">
                    <img className='rounded-t-xl my-4' src={video?.thumbnail} alt="video-thumbnail"/>
                    </a>
                    <p className="bg-[#00000099] absolute bottom-1  right-1 w-max p-0.5  font-medium text-xs  text-white rounded-xl ">{getExactDuration(video.duration)}</p>

        {isHovered && (
                    <a href={`https://youtu.be/${video?.message}`} target="_blank">
                <div className="absolute inset-0 bg-blend-color bg-opacity-20 flex items-center justify-center">
                    <img className='rounded-t-xl my-4' src={video?.thumbnail} alt="video-thumbnail"/>
                </div>
                </a>
                )}

            </div>
            <p className={`mb-0.5 select-none cursor-pointer line-clamp-2`} title={video?.title}>{video?.title}</p>          
            <div className="flex gap-5">
            <p className='text-[#949494] text-[13px]'>{formatViews(Number(video?.view_count))} views • {getRelativeTime(video?.published_at)}</p>
            <button className='text-[10px] bg-[#141414] text-white p-1 rounded-[2px]'>#{video?.tags}</button>
           </div>

           <div className="flex w-max justify-around gap-2 mt-2 mb-5">
            <img  src={video?.channel_thumbnail} className='rounded-full size-8 cursor-pointer'alt="" />
            <div className="flex-col">
            <p className="text-[15px] self-center">{video?.channel_name}</p>
            <p className="text-[#949494] text-[11px]">{formatViews(Number(video?.subscriber_count))} subscribers</p>
            </div>
            <div className="flex-row">
            </div>
            
            <p></p>
           </div>
        </div>
    )

}