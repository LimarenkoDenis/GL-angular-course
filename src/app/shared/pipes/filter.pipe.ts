import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IProduct[], testSearch?: string): IProduct[] {
    console.log(value, testSearch);

    if (!value) {
      return value;
    }

    return value.filter((item: IProduct) => {
      return `${item.title.toLowerCase()}${item.description.toLowerCase()}`.includes(testSearch.toLowerCase());
    })
  }

}
