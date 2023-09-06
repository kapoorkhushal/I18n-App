export class User {

    firstName!: string;
    lastName!: string;
    email!: string;
    contactNumber!: number;

    /**
     *
     */
    constructor(x : User) {
        this.firstName = x.firstName;
        this.lastName = x.lastName;
        this.email = x.email;
        this.contactNumber = x.contactNumber;
    }
}