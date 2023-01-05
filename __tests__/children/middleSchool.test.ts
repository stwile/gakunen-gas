import { MiddleSchool } from '../../src/children/middleSchool';
import { GradeError } from '../../src/errors/GradeError';

describe('適切な年齢の場合、インスタンスが返るべき', (): void => {
  test.each`
    age
    ${12}
    ${13}
    ${14}
  `('年齢: $age', ({ age }: { age: number }): void => {
    const actual = new MiddleSchool(age);
    expect(actual).toBeInstanceOf(MiddleSchool);
    expect(actual.age).toBe(age);
    expect(actual.grade).toBe('中学生');
  });
});

describe('エラーが返るべき', (): void => {
  test.each`
    age
    ${0}
    ${1}
    ${2}
    ${4}
    ${5}
    ${6}
    ${7}
    ${8}
    ${9}
    ${10}
    ${11}
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
    expect(() => new MiddleSchool(age)).toThrowError(
      new GradeError(`${age}: 中学生の年齢として正しい数字ではありません`),
    );
  });
});
