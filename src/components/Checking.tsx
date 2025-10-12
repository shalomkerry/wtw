import { getData } from "../service/fetch"
export function FetchingVideos(){
  const {data,error,isLoading} = getData()
  if(data){
    return data
  }
  if(error){
    return error
  }

  if(isLoading){
    return isLoading
  }
}