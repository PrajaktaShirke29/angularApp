export class User{
    constructor(
        public UserName:string,
        public Password:string
    ){}
}

export class RegUser{
    constructor(
       public UserName:string,
        public Password:string,
       public ConfirmPassword:string
    ){}
}

export const Users:Array<User>=new Array <User>();
