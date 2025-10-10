import useSWR from "swr";
const fetcher = (url:string)=>fetch(url).then(res=>res.json())
export default function getData(){
    const {data,error,isLoading} = useSWR('http://localhost:3000/fetchData',fetcher,{
        refreshInterval:3,
        revalidateOnFocus:false,
        revalidateIfStale:false,
    })
    if (isLoading) return ('<div>Loading Videos</div>')
    if (error) return ('<div>Encountered Error</div>')

    return data
}