export interface ScoreDetails {
    daily_questions: Array<DailyQuestions>;
    profile_update:Array<DailyQuestions>;
    totalScore:Number,
}

export interface DailyQuestions{
    
        id: string;
        activity_id: string;
        activity_type:string;
        points:Number;
        name?:string;
        added_date?:string;
        question_date?:string;
        question?:string;
 
}