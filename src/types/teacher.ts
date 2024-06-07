import { Subject } from './subject'

export interface Teacher {
    id: number;
    name: string;
    nip: string;
    subject: Subject;
}