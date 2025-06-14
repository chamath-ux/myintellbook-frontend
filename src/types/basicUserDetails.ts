export interface basicUserDetails {
    first_name: string;
    last_name: string;
    gender: number;
    category: {
        id: number,
        name: string
    };
    profession_id?: number;
    profession?: number
}