export class User {
    name: string;
    surname: string;
    login: string;
    password: string;
    sex: string;
    mail: string;
    constructor(name:string, surname:string, login:string, password:string, sex:string, mail:string) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.sex = sex;
        this.mail = mail;
    }
}
