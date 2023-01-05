import { GradeError } from '../../src/errors/GradeError';

import { PreSchoolChild } from './../../src/children/preSchoolChild';

describe('適切な年齢の場合、インスタンスが返るべき', (): void => {
  test.each`
    age
    ${1}
    ${2}
    ${3}
    ${4}
    ${5}
  `('年齢: $age', ({ age }: { age: number }): void => {
    const actual = new PreSchoolChild(age);
    expect(actual).toBeInstanceOf(PreSchoolChild);
    expect(actual.age).toBe(age);
    expect(actual.grade).toBe('未就学児');
  });
});

describe('エラーが返るべき', (): void => {
  test.each`
    age
    ${0}
    ${6}
    ${7}
    ${8}
    ${9}
    ${10}
    ${11}
    ${12}
    ${13}
    ${14}
    ${15}
    ${16}
    ${17}
    ${18}
    ${19}
    ${20}
    ${21}
    ${22}
    ${23}
  `('年齢: $age', ({ age }: { age: number }): void => {
    expect(() => new PreSchoolChild(age)).toThrowError(
      new GradeError(`${age}: 未就学児の年齢として正しい数字ではありません`),
    );
  });
});
