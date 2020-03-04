import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
    // transform(items: any[], searchText: string): any[] {
    //     if (!items) return [];
    //     if (!searchText) return items;
    //     searchText = searchText.toLowerCase();
    //     return items.filter(it => {
    //         return it.username.toLowerCase().includes(searchText);
    //     });
    // }
    transform(items: any[], searchText: any, properties: string[]): any[] {
        if (!items) return [];
        if (!searchText) return items;
        return items.filter(item => {
            var itemFound: Boolean;
            for (let i = 0; i < properties.length; i++) {
                if (item[properties[i]].toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
                    itemFound = true;
                    break;
                }
            }
            return itemFound;
        });
    }
}