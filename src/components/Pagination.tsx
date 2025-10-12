interface PaginationProp{
    page:number
    ref:React.RefObject<HTMLDivElement|null>
    paginationLength:number
    setPage:React.Dispatch<React.SetStateAction<number>>
}
import backdim from '../assets/back-arrow-dim.svg'
import back from '../assets/back-arrow.svg'
import frontdim from '../assets/next-arrow.svg'
import frontactive from '../assets/front-active.svg'
export function PaginationComponent({ref,paginationLength,page,setPage}:PaginationProp){

return (
  <div className="flex justify-center items-center" ref={ref}>
 <div className="flex items-center justify-center gap-2 my-6 w-2xs bg-neutral-800 px-4 py-2 rounded-lg">
  <button
    onClick={() => setPage((p) => Math.max(p - 1, 1))}
    disabled={page === 1}
    className="px-3 py-1 flex  gap-2 items-center justify-center hover:cursor-pointer rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-40"
  >
     <img src={page===1?backdim:back} alt="" /> <p>Back</p>
  </button>
{
  Array.from({length:paginationLength}).map((_,i)=>{
    const pageNum = i + 1
    return (
      <button key={pageNum}
      onClick={()=>setPage(pageNum)} 
      className = {`w-8 h-8 rounded hover:cursor-pointer ${page===pageNum?"bg-black text-white":"bg-gray-200"}`}
      >
        {pageNum}
      </button>
    )
  },0)
}

  <button
    onClick={() => {setPage((p) => Math.min(p + 1, paginationLength))

    }}
    disabled={page === paginationLength}
    className="px-3 py-1 flex  gap-2 items-center justify-center rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-40 hover:cursor-pointer"
  >
     <p>Next</p> 
     <img src={page===paginationLength?frontdim:frontactive} alt="" /> 


  </button>
</div>
</div>
)
}