interface IAddress {
    country: string,
    city: string,
    street?: string,
    houseNumber?: number,
}

interface ISocialLinks {
    instagram?: string,
    facebook?: string,
    linkedin?: string,
    github: string
}

interface IUser extends IAddress, ISocialLinks {
    name: string,
    age: number
}

const User1: IUser = {
    name: 'Ira',
    age: 31,
    country: 'Israel',
    city: 'Holon',
    github: 'https:github.com/irastefan/',
}