import { useEffect, useMemo, useState } from "react"
import { mockVideos } from "../Data/mockData"
import { cn } from "../lib/utils"
import { VideoCard } from "./Videos"
import { type Videos } from "../types"
interface RandomVideoProp{
    previewRandomVideo:boolean,
    setPreviewRandomVideo:(preview:boolean)=>void
}

export function RandomVideo({previewRandomVideo,setPreviewRandomVideo}:RandomVideoProp){

useEffect(()=>{
const randomNum =  Math.floor(Math.random() * mockVideos.length);
setRandomNum(randomNum)
},[])

  const [randomNum, setRandomNum] = useState<number>(3);
  const [randomItem, setRandomItem] = useState<Videos>(mockVideos[randomNum]);

  const handleButtonClick = () => {
    if (mockVideos.length) {
      const index = Math.floor(Math.random() * mockVideos.length);
      setRandomItem(mockVideos[index]);
    }
  };
    const isVisible = ()=>{
        return previewRandomVideo?`visible`:`invisible`
    } 
      const  getExactDuration = (duration:string)=>{
       const timearray = duration.split(':')
       const [hour, minute, second] = timearray
       if (hour=='0'){
        return (`${minute}:${second}`)
       }
       return duration
    }

    return (
    <div className={cn('w-[420px] absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-conic via-[#1E1F29]  from-0% to-[#2B2D3C] via-[100%] rounded-xl  h-[420px]',isVisible())} id="randomPart">
    <VideoCard video={randomItem}/>
    <button onClick={handleButtonClick}>Get a random</button>
    <button onClick={()=>(setPreviewRandomVideo(false))} className={`hover:cursor-pointer text-white text-[13px]`}>Exit</button>
    </div>
)
}
