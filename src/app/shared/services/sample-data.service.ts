export class SampleDataService {
    public testData: { name: string, value: number }[] = [
        {
            name: "something",
            value: 0
        },
        {
            name: "else",
            value: 1
        }
    ]

    public getTestData() {
        return this.testData;
    }

    public addTestData(name: string, value: number) {
        this.testData.push({ name, value });
    }
}