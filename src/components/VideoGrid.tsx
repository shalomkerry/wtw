import { VideoCard } from "./Videos";
import { type Videos } from "../types"
import { cn } from "../lib/utils";
interface VideoGridProps{
    videos: Videos[]
    Loading:boolean
    previewRandomVideo:boolean
}
export const VideoContainer:React.FC<VideoGridProps> = ({videos,Loading,previewRandomVideo})=>{
    if(Loading){
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {[...Array(8)].map((_,i)=>(
                    <div className="bg-white rounded-lg shadow overflow-hidden h-64 animate-pulse" key={i}>
                    <div className="h-40 bg-gra-300"></div>
                    <div className="p-3">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    </div>
                ))}

            </div>
        )
    }
    if(videos.length===0){
        return (
            <div className="bg-black">
                <h2 className="text-white">There is nothing</h2>
            </div>
        )
    }
    return(
        <div className={cn(`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12 gap-6`,previewRandomVideo?`blur-sm`:'')}>
            {
            videos.map((video)=>(
            <VideoCard key={video.id} video={video}/>
            ))
            }
        </div>
    )

}
