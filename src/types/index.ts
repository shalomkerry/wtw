export type Videos =  {
    id:number,
    channel_name:string,
    channel_thumbnail:string,
    duration:string,
    message:string,
    tags:string,
    thumbnail:string,
    title:string,
    published_at:string,
    view_count:string,
    likes:string,
    subscriber_count:string,
    creator:string,
    post_link:string,
    post_date:string
} 
export interface TagTypes {
  id: number;
  title: string;
}

export interface Creators{
  id: number;
  name:string;
  link:string;
}