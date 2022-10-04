interface Acconadation {
    title: string,
    address: string,
    location: string,
    counfOfRooms?: number
}

const mySimpleAccomadation: Pick<Acconadation, 'title' | 'address'> = {
    title: 'acc1',
    address: 'address1'
}

const mySimpleAccomadation2: Omit<Acconadation, 'title' | 'address' | 'location'> = {
    counfOfRooms: 4
}

const mySimpleAccomadation3: Partial<Acconadation> = {
    title: 'accTest'
}
const mySimpleAccomadation4: Required<Acconadation> = {
    title: 'dsd',
    address: 'fedsfg fds',
    location: 'dsfsdfd',
    counfOfRooms: 324234
}


const arr1: ReadonlyArray<number> = [1, 2, 3];
//arr1.push(4);

