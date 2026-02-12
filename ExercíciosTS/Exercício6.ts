function retornarElemento<T> (array: T[], index: number): T  {
    return array[index];
}

console.log(retornarElemento(["a", "b", "c"], 2));