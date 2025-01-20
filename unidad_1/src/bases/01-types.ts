export const name: string = "Fernando";
export const age: number = 36;
export const isValid: boolean = true;

export const templateString = `
    Esto es un string
    multilínea
    que puede tener
    " dobles
    ' simples
    inyectar valores \$${ name }
    expresiones ${ 1 + 1 }
    números: ${ age }
    booleanos: ${ isValid }
`;

console.log( templateString );