
export interface Iuser{
    id:string;
    first_name:string;
    last_name:string;
}

export interface IUser{
    id:string;
    firstName:string;
    lastName:string;
    fullName:string;

    serialize():Iuser
}

export class User implements IUser{
    id:string = Math.random().toString();
    get fullName():string{
       return `${this.firstName} ${this.lastName}`;

    }
    constructor(public firstName:string,public lastName:string){}
    
}