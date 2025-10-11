import { useEffect, useRef, useState } from 'react'
import './App.css'
import { mockVideos } from './Data/mockData'
import {type Videos} from './types/index.ts'
import { VideoContainer } from './components/VideoGrid'
import { FilterVideos } from './components/FilterBar.tsx'
import { RandomVideo } from './components/RandomVid.tsx'
import { RandomPreview } from './components/RandomButton.tsx'
import { PaginationComponent } from './components/Pagination.tsx'
function App() {
  const [data, setData] = useState<Videos[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [page,setPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState<string|null>(null)
  const [previewRandomVideo, setPreviewRandomVideo] = useState<boolean>(false)
  const paginationRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const VIDEOS_PER_PAGE = 24
  const paginationLength = Math.ceil(mockVideos.length/VIDEOS_PER_PAGE)

  function VideoRange(num:number){
      const num2 = (num*VIDEOS_PER_PAGE) 
      const num1 = num2-VIDEOS_PER_PAGE
      return [num1,num2]
    }


 function filterBasedOnTag(){
  if(!selectedTag) return mockVideos
  return mockVideos.filter(element=> element.tags===selectedTag)
 }


useEffect(() => {
  const [start, end] = VideoRange(page);
  if(selectedTag){
    const videos = filterBasedOnTag()
    return setData(videos.slice(start,end))
  }
  setData(mockVideos.slice(start, end));
}, [page, mockVideos]);
    
useEffect(()=>{

  const [start, end] = VideoRange(page);
  setData(mockVideos.slice(start,end))
  setIsLoading(false)
 },[])

useEffect(()=>{

  const [start, end] = VideoRange(page);
  const filtered = filterBasedOnTag()
  setData(filtered.slice(start,end))
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
 <div className="" ref={videosRef}>
  <VideoContainer isLoading={isLoading} videos={data} previewRandomVideo={previewRandomVideo}/>
 </div>
 <RandomVideo previewRandomVideo={previewRandomVideo} setPreviewRandomVideo={setPreviewRandomVideo} /> 
<PaginationComponent ref={paginationRef} paginationLength={paginationLength} page={page} setPage={setPage}/>
 {data.length>0?
 <RandomPreview previewRandomVideo={previewRandomVideo} setPreviewRandomVideo={setPreviewRandomVideo}/>
 :''}
  </>
  )

}

export default App
