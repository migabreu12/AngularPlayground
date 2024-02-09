import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class SampleDataService {
    public constructor(private loggingService: LoggingService) {}

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
        this.loggingService.logMessage(`the test data ${ name } - ${ value } has been added to the sample data service`);
    }
}