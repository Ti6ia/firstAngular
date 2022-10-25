export interface UserList{
    users: User[]
}

export interface User{
    id: number,
    firstName: string,
    lastName: string,
    phone: string
}

/* export class User implements User{
    public id: number;
    public firstName: string;
    public lastName: string;
    public phone: string;

    constructor(id: number, firstName: string, lastName: string, phone: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
} */