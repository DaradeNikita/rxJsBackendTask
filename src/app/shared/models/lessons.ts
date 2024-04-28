export interface IlessonsRes{
    payload: Lesson[]
}


export interface Lesson {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}