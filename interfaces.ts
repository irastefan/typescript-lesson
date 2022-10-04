interface Contacts {
    phone: string,
    email: string,
    facebook?: 'string',
}

interface Address {
    country: 'Israel' | 'USA',
    city: string
}

interface User extends Contacts, Address {
    readonly name: string,
    age: number,
}

interface Customer {
    user: User,
    orderId: number,
}

const customer1: Customer = {
    user: {
        name: 'Ira',
        age: 31,
        phone: '0532498427',
        email: 'admin@irastefan.com',
        country: 'Israel',
        city: 'Holon'
    },
    orderId: 1254
}

// customer1.user.name = 'Ira2';