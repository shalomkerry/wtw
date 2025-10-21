import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { VideoCard } from "./Videos"
import { type Videos } from "../types"
import cancelIcon from "../assets/x-circle.svg"
import dice from "../assets/dice-solid-full(1).svg"
interface RandomVideoProp{

    videos:Videos[]
    previewRandomVideo:boolean,
    setPreviewRandomVideo:(preview:boolean)=>void
}

export function RandomVideo({videos,previewRandomVideo,setPreviewRandomVideo}:RandomVideoProp){

  const [randomItem, setRandomItem] = useState<Videos>(videos[1])

useEffect(()=>{
  if(videos && videos.length>0){
const randomNum =  Math.floor(Math.random() * videos?.length);
setRandomItem(videos[randomNum])
  }
},[videos])

  const handleButtonClick = () => {
    if (videos?.length) {
    setTimeout(()=>{
      const index = Math.floor(Math.random() * videos?.length);
      setRandomItem(videos[index]);
    },200)
    }
  };
    const isVisible = ()=>{
        return previewRandomVideo?`visible`:`invisible`
    } 

    return (
      
    <div className={cn('mb-[500px] absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-conic via-[#1E1F29]  from-0% to-[#2B2D3C] via-[100%] rounded-xl max-w-[400px] p-7 flex flex-col items-center gap-3',isVisible())} id="randomPart">
    <button onClick={()=>(setPreviewRandomVideo(false))} className={`hover:cursor-pointer hover:scale-120 text-white text-[13px] absolute top-1 right-0`}>
    <img className=''src={cancelIcon} alt="cancelIcon" />
    </button>
    <VideoCard video={randomItem}/>
    <button className={`w-[200px] hover:cursor-pointer hover:scale-105 p-2 rounded-sm flex justify-around align-center bg-[#505D80] text-white`} onClick={handleButtonClick}>Get a random Video
    <img className='w-7'src={dice} alt="dice" />
    </button>
    </div>
)
}

