export interface userGeneralInfoType{
 first_name: string
 last_name: string
 gender: number | string,
 birth_date: string,
 profile_image:'',
 cover_image:'',
 posts?:[],
 visibility:{
      [key: string]: number
 }
}