export class User {
    id: number;
    username: string;
    email: string;
    phone: string;
    website: string;
    constructor(id: number, username: string, email: string, phone: string, website: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
    }
}
