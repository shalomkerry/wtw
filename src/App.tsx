import { useEffect, useState } from 'react'
import './App.css'
import { mockVideos } from './Data/mockData'
import {type Videos} from './types/index.ts'
import { VideoContainer } from './components/VideoGrid'
import { FilterVideos } from './components/FilterBar.tsx'
import { RandomVideo } from './components/RandomVid.tsx'
function App() {
  const [data, setData] = useState<Videos[]>([])
  const [isLoading, setIsLoading] = useState(true)
useEffect(()=>{
  setData(mockVideos)
setIsLoading(false)
 },[])

 function filterBasedOnTag(){
  const filter:Videos[] = [] 
  if(selectedTag){
   mockVideos.forEach((x)=>{
    if(x.tags==selectedTag){
      filter.push(x)
    }
  })
    return filter
  }
  return mockVideos
 }
const [selectedTag, setSelectedTag] = useState<string|null>(null)
const [previewRandomVideo, setPreviewRandomVideo] = useState<boolean>(false)

useEffect(()=>{
  setData(filterBasedOnTag)
},[selectedTag])

return (
  <>
  <div className="flex justify-around m-5">
      <button className="hover:cursor-pointer text-white">Community</button>
      <button className="hover:cursor-pointer text-[15px] text-[#ffff]">Community</button>
      <button onClick={()=>{

        const randomPart = document.getElementById('randomPart')
        if(randomPart){
          randomPart.scrollIntoView({behavior:"smooth"})
        }
        setPreviewRandomVideo(true)
        }}className="p-2 bg-white rounded-[6px] hover:cursor-pointer hover:scale-110">Random Video</button>
  </div>
 <FilterVideos selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> 
  <VideoContainer isLoading={isLoading} videos={data} previewRandomVideo={previewRandomVideo}/>
 <RandomVideo previewRandomVideo={previewRandomVideo} setPreviewRandomVideo={setPreviewRandomVideo} /> 
  </>
  )

}

export default App
