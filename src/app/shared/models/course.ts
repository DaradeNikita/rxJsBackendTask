export interface IcourseRes{
    payload: Course[]
}


export interface Course {
    id:number;
    description:string;
    iconUrl: string;
    courseListIcon: string;
    longDescription: string;
    category: "BEGINNER" | "ADVANCED";
    lessonsCount:number;
}