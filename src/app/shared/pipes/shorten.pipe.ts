import { Pipe, PipeTransform } from "@angular/core";


// Can add the property pure: false to the pipe decorator which will allow
// the pipe to update whenever any data changes on the page... Any data so
// this is a performance hit; Advised against this
@Pipe({
    name: "shorten"
})
export class ShortenPipe implements PipeTransform {
    public transform(value: any, limit: number) {
        if (value.length > limit) {
            return value.substr(0, limit) + " ...";
        }
        
        return value;
    }
}