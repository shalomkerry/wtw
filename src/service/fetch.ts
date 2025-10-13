import useSWR from "swr";
const fetcher = (url:string)=>fetch(url).then(res=>res.json())
export function getData(){
    const {data,error,isLoading} = useSWR('https://fastify-serverless-function-drab-xi.vercel.app/fetch',fetcher,{
        refreshInterval:12 * 60 * 60 * 1000,
        revalidateOnFocus:false,
        revalidateIfStale:false,
    })

    return {data,error,isLoading}
}