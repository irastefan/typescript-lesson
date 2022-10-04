interface IClassUser {
    name: string;
    surname: string;
    printFullName(): string;
}
interface IClassCustomer extends IClassUser {
    bill: number;
}

class ClassUser implements IClassUser {
    name;
    surname;
    // private secretMessage: string;
    protected secretMessage: string;

    constructor (props: {name: string, surname: string}) {
        this.name = props.name;
        this.surname = props.surname;
        this.secretMessage = `${props.name} secret message`;
    }

    printFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class ClassCustomer extends ClassUser implements IClassCustomer {
    bill;

    constructor (props: {name: string, surname: string, bill: number}) {
        super({
            name: props.name,
            surname: props.surname,
        });
        this.bill = props.bill;
    }

    getBill (): string {
        return `${this.secretMessage} ${this.bill}`;
    }
    
}

const newUser = new ClassUser({
    name: 'Ira',
    surname: 'Stefan',
});

console.log(newUser.printFullName());

const newCustomer = new ClassCustomer({
    name: 'Ira',
    surname: 'Stefan',
    bill: 75764
});

console.log(newCustomer.getBill());