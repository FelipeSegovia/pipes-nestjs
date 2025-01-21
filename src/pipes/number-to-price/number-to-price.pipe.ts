import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NumberToPricePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return {...value, price: new Intl.NumberFormat('es-CL').format(value.price)};
  }
}
