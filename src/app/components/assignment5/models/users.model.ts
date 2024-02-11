export class User {
    public name: string;
    public isActiveStatus: boolean;

    public constructor(name: string, isActiveStatus: boolean) {
        this.name = name;
        this.isActiveStatus = isActiveStatus;
    }
}