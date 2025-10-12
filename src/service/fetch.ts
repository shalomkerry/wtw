import useSWR from "swr";
const fetcher = (url:string)=>fetch(url).then(res=>res.json())
export function getData(){
    const {data,error,isLoading} = useSWR('http://localhost:3000/fetchData',fetcher,{
        refreshInterval:12 * 60 * 60 * 1000,
        revalidateOnFocus:false,
        revalidateIfStale:false,
    })

    return {data,error,isLoading}
}