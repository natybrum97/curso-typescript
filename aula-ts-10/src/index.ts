function identity<T> (value: T) : T {
    return value;
}

console.log(identity(1)) // 1
console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
console.log(identity<number[]>([1,2,3])); // [1, 2, 3]



// OUTRA FORMA DE FAZER: 

type Parametro1 <T> = T;

function identity1 <TIPO>(value: Parametro1<TIPO>): Parametro1 <TIPO> {
    return value;
}

console.log(identity(1)) // 1
console.log(identity1<number>(42)); // 42
console.log(identity1<string>("Hello")); // Hello
console.log(identity1<number[]>([1,2,3])); // [1, 2, 3]
