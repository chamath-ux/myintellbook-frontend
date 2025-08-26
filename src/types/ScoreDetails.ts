export interface ScoreDetails {
    daily_questions:DailyQuestions[]
    profile_update:DailyQuestions[]
    totalScore:Number,
}

export interface DailyQuestions{
    
        id: string;
        activity_id: string;
        activity_type:string;
        points:Number
 
}