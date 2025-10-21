import dice from '../assets/dice-solid-full(1).svg'
interface randomButtonProp{
    previewRandomVideo:boolean
    setPreviewRandomVideo:(preview:boolean)=>void
}
export function RandomPreview({previewRandomVideo,setPreviewRandomVideo}:randomButtonProp){
    return(
    <div className={`flex justify-center ${previewRandomVideo?`blur-sm`:''}`}>
        <div className='bg-[#2C2C2C] max-w-[374px] rounded-3xl px-16 mb-6 py-4  flex flex-col items-center'>
            <h3 className="text-2xl text-white">Couldn't Decide?</h3>
            <p className="text-[#F8F8F8] text-center font-light pt-1 pb-2">Let a random picking function 
choose your next watch!</p>
        <div className="flex justify-around m-5">
        <button onClick={()=>{

            const randomPart = document.getElementById('randomPart')
            if(randomPart){
            randomPart.scrollIntoView({behavior:"smooth"})
            }
            setPreviewRandomVideo(true)
            }} className="p-2 bg-white text-[17px] gap-1.5 flex flex-row-reverse items-center justify-center rounded-[6px] hover:cursor-pointer hover:scale-110">Random Video
            <img src={dice} className='w-10' alt="" /> 
            </button>
  </div>
        </div>
    </div>
    )
}