import { University } from '~/children/university';
import { GradeError } from '~/errors/GradeError';

describe('適切な年齢の場合、インスタンスが返るべき', (): void => {
  test.each`
    age
    ${18}
    ${19}
    ${20}
    ${21}
  `('年齢: $age', ({ age }: { age: number }): void => {
    const actual = new University(age);
    expect(actual).toBeInstanceOf(University);
    expect(actual.age).toBe(age);
    expect(actual.grade).toBe('大学生');
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
    ${12}
    ${13}
    ${14}
    ${15}
    ${16}
    ${17}
    ${22}
    ${23}
  `('年齢: $age', ({ age }: { age: number }): void => {
    expect(() => new University(age)).toThrowError(
      new GradeError(`${age}: 大学生の年齢として正しい数字ではありません`),
    );
  });
});
