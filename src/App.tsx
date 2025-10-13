import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import {type Videos} from './types/index.ts'
import { VideoContainer } from './components/VideoGrid'
import { FilterVideos } from './components/FilterBar.tsx'
import { RandomVideo } from './components/RandomVid.tsx'
import { RandomPreview } from './components/RandomButton.tsx'
import { PaginationComponent } from './components/Pagination.tsx'
import { getData } from './service/fetch.ts'
function App() {
  const {data,isLoading} = getData()
  const [videos, setVideos] = useState<Videos[]>([])
  const [Loading, setIsLoading] = useState<boolean>(true)
  const [page,setPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState<string|null>(null)
  const [previewRandomVideo, setPreviewRandomVideo] = useState<boolean>(false)
  const paginationRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const VIDEOS_PER_PAGE = 24
  const paginationLength = Math.ceil(videos?.length/VIDEOS_PER_PAGE)


  function VideoRange(num:number){
      const num2 = (num*VIDEOS_PER_PAGE) 
      const num1 = num2-VIDEOS_PER_PAGE
      return [num1,num2]
    }

let mockVideos;

useEffect(() => {
  if (!data) return;
  mockVideos = data.data
  setVideos((prev) => {
    if (JSON.stringify(prev) !== JSON.stringify(data.data)) {
      return data.data;
    }
    return prev;
  });
}, [data]);

 function filterBasedOnTag(){
  if(!selectedTag) return data?.data
  let vid:Videos[]= data?.data
  return vid.filter(element=> element.tags===selectedTag)
 }

useMemo(() => {
  if(!data?.data) return 
  const [start, end] = VideoRange(page);
  let currentVideos = data.data
  setVideos(currentVideos.slice(start, end));

  if(selectedTag){
    const currentVideos = filterBasedOnTag()
    return setVideos(currentVideos.slice(start,end))
  }
}, [page,selectedTag]);
    
useEffect(()=>{
  const [start, end] = VideoRange(page);
  setVideos(videos.slice(start,end))
  setIsLoading(false)
 },[])

useEffect(()=>{
  const [start, end] = VideoRange(page);
  const filtered = filterBasedOnTag()
  setVideos(filtered?.slice(start,end))
},[selectedTag])

return (
  <>
  {data?
    <>
  <div className="flex justify-around m-5">
      <button className="hover:cursor-pointer text-white">Community</button>
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
  <VideoContainer Loading={Loading} videos={videos} previewRandomVideo={previewRandomVideo}/>
 </div>
 {videos?.length>0?
 <>
 <RandomVideo videos={data.data} previewRandomVideo={previewRandomVideo} setPreviewRandomVideo={setPreviewRandomVideo} /> 
<PaginationComponent ref={paginationRef} paginationLength={paginationLength} page={page} setPage={setPage}/>
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
