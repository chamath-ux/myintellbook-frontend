export interface workExperianceType{
    id?:number,
    title:string,
    company:string,
    currently_working:number,
    location:string,
    selectEmpType:number,
    locationType:number,
    visibility:{
      [key: string]: number
    }
}