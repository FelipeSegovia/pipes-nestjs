import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercaseNamePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return {
      ...value,
      name: value.name.toUpperCase(),
    };
  }
}
