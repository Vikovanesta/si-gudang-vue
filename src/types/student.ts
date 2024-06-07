import { Class } from './class'

export interface Student {
    id: number;
    name: string;
    year_in: number;
    date_of_birth: string;
    class: Class;   
}