import { useEffect, useRef, useState } from 'react'
import './App.css'
import {type Videos} from './types/index.ts'
import { VideoContainer } from './components/VideoGrid'
import { FilterVideos } from './components/FilterBar.tsx'
import { RandomVideo } from './components/RandomVid.tsx'
import { RandomPreview } from './components/RandomButton.tsx'
import { PaginationComponent } from './components/Pagination.tsx'
import { getData } from './service/fetch.ts'
import dice from "./assets/dice-solid-full(1).svg"
import { inject } from "@vercel/analytics"
function App() {
  inject()
  const {data,isLoading} = getData()
  const [videos, setVideos] = useState<Videos[]>([])
  const [Loading, setIsLoading] = useState<boolean>(true)
  const [page,setPage] = useState(1)
  const [paginationVisible,setVisibilityPagination] = useState(true)
  const [selectedTag, setSelectedTag] = useState<string|null>(null)
  const [selectedCreator,setCreator] = useState<string|null>(null)
  const [previewRandomVideo, setPreviewRandomVideo] = useState<boolean>(false)
  const paginationRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const VIDEOS_PER_PAGE = 60;
  const [paginationLength, setPaginationLength] = useState(
    () => Math.ceil((videos?.length || data?.data?.length || 0) / VIDEOS_PER_PAGE)
  );


  function VideoRange(num:number){
      const num2 = (num*VIDEOS_PER_PAGE) 
      const num1 = num2-VIDEOS_PER_PAGE
      return [num1,num2]
    }


useEffect(() => {
  if (!data) return;
  setVideos((prev) => {
    if (JSON.stringify(prev) !== JSON.stringify(data.data)) {
      return data.data;
    }
    return prev;
  });
}, [data]);

useEffect(()=>{
  setIsLoading(false)
},[])

useEffect(()=>{
  setPage(1)
},[selectedTag,selectedCreator])

useEffect(() => {
  if(!data?.data) return 
  let filteredVideos:Videos[] = data.data
  if(selectedTag){
    filteredVideos = filteredVideos.filter(element=>element.tags==selectedTag)
  }

  if(selectedCreator){
    filteredVideos = filteredVideos.filter(element=>element.creator==selectedCreator)
  }
 
  if(filteredVideos.length>VIDEOS_PER_PAGE){
    setVisibilityPagination(true)
    setPaginationLength(Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE));
    const [start,end] = VideoRange(page)
    setVideos(filteredVideos.slice(start,end))
  }else{
    setVisibilityPagination(false)
    setVideos(filteredVideos)
  }

}, [page,selectedTag,selectedCreator,data]);

return (
  <>
  {data?
    <>
  <div className="flex justify-around m-5">
      <button className="text-white">SceniusTube</button>
      <button 
      onClick={()=>{
        const randomPart = document.getElementById('randomPart')
        if(randomPart){
          randomPart.scrollIntoView({behavior:"smooth",
            block:'center'
          })
        }
        setPreviewRandomVideo(true)
        }} 
        className="p-2 bg-white text-[17px] gap-1.5 flex flex-row-reverse items-center justify-center rounded-[6px] hover:cursor-pointer hover:scale-110">
        <p>Random Video</p> 
        <img src={dice} className="w-6" alt="" /> 
        </button>
  </div>
 <FilterVideos selectedCreator={selectedCreator} setCreator={setCreator} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> 
 <div className="" ref={videosRef}>
  <VideoContainer Loading={Loading} videos={videos} previewRandomVideo={previewRandomVideo}/>
 </div>
 {videos?.length>0?
 <>
 <RandomVideo videos={data.data} previewRandomVideo={previewRandomVideo} setPreviewRandomVideo={setPreviewRandomVideo} /> 
 {paginationVisible?
<PaginationComponent ref={paginationRef} paginationLength={paginationLength} page={page} setPage={setPage} />
:''
}
 <RandomPreview  previewRandomVideo={previewRandomVideo} setPreviewRandomVideo={setPreviewRandomVideo}/>
</>:''} 
 </>
 :isLoading?
      <div className="flex mt-5 items-center justify-center duration-500">
      <div className="bg-[#141414] text-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center gap-3">
        <p className="text-xl font-semibold">...Loading</p  >
      </div>
    </div>
 :'' 
 }
  </>
  )

}

export default App
