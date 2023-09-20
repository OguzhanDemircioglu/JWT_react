export default class User {
    constructor(name, email, password,role,token,id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.token = token;
        this.id = id;
    }   

}
export const user = new User("", "", "");
