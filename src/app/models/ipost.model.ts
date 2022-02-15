/*
to generat model by ng cli use this commend:-
ng g interface  models/Ipost --type=model
*/

// we use interface 
export interface Ipost {
    userId?:number;
    id?:number;
    title?:string;
    body?:string;
}
