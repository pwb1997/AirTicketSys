import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], search: String): any[] {
        if (!search) { return []; }
        search = search.toLowerCase();
        return items.filter(it => {
            return (it['airport'].toLowerCase().startsWith(search) || it['city'].toLowerCase().startsWith(search));
        });
    }
}
