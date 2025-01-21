import { UppercaseNamePipe } from './uppercase-name.pipe';
import {ArgumentMetadata} from "@nestjs/common";

describe('UppercaseNamePipe', () => {
  let pipe: UppercaseNamePipe;

  beforeEach(() => {
    pipe = new UppercaseNamePipe();
  })

  it('cambiar nombre del producto a mayuscula', () => {

    const mock = {
      name: 'test',
      price: 1000
    }

    const resultMock = {
      name: 'TEST',
      price: 1000,
    }

    expect(pipe.transform(mock, {} as ArgumentMetadata)).toEqual(resultMock);
  });
});
