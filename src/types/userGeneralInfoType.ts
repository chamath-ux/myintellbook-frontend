export interface userGeneralInfoType{
 first_name: string
 last_name: string
 gender: number | string,
 birth_date: string,
 visibility:{
      [key: string]: number
 }
}