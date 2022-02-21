export interface Auth{
    username: string;
    password: string;
}

export interface AuthEntity extends Auth{
    id: string;
}