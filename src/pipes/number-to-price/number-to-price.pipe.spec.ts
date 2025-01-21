import { NumberToPricePipe } from './number-to-price.pipe';
import {ArgumentMetadata} from "@nestjs/common";

describe('NumberToPricePipe', () => {
  let pipe: NumberToPricePipe;

  beforeEach(() => {
    pipe = new NumberToPricePipe();
  })

  it('formatear el numero 1000 a 1.000', () => {
    const mock = {
      name: 'test',
      price: 1000,
    }

    const responseMock = {
      name: 'test',
      price: '1.000'
    }

    expect(pipe.transform(mock, {} as ArgumentMetadata)).toEqual(responseMock);
  });


  it('formatear el numero 1000000 a 1.000.000', () => {
    const mock = {
      name: 'test',
      price: 1000000,
    }

    const responseMock = {
      name: 'test',
      price: '1.000.000'
    }

    expect(pipe.transform(mock, {} as ArgumentMetadata)).toEqual(responseMock);
  });
});
