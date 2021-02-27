export interface InterfaceTest {
    name: string,
    surname: string
}

export class Test {
    public name : string = "";
    public surname : string = "";

    constructor(n: string, s: string) {
        this.name = n;
        this.surname = s;
    }
}