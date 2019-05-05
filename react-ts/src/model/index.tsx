
export interface IUserDTO {
    id: string;
    first_name: string;
    last_name: string;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;

    serialize(): IUserDTO
}

export class User implements IUser {
    serialize(): IUserDTO {
        return {
            id: this.id,
            first_name: this.firstName,
            last_name: this.lastName
        }
    }
    id: string = Math.random().toString();
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;

    }
    constructor(public firstName: string, public lastName: string) { }

}