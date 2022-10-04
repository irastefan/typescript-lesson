//Literal types

let env: 'development' | 'staging' | 'production' = 'staging';

function f (arg: 'development' | 'staging' | 'production'): 'development' | 'staging' | 'production' {
    return arg;
}



//Types

type Env = 'development' | 'staging' | 'production';

function fEnv (arg: Env): Env {
    return arg;
}



//Enums

const enum Env2 {
    Development = 'development', 
    Staging = 'staging',
    Production = 'production'
}

let env2: Env2 = Env2.Development;

function fEnv2 (arg: Env2): Env2 {
    return arg;
}
fEnv2(Env2.Production);

