// Any

let test: any = 123;
test = '123';
test.map();
let testCopy:string = test;

//Unknown

let test2: unknown = 1234;
// let text2Copy: string = test2;
// test2.map();

//void
function f1 (arg: string): void {
    console.log(arg);
    // return arg;
}

const f2 = (arg: string): void => {    
    console.log(arg);
    // return arg;
}