import { UpperElementarySchool } from '../../src/children/upperElementarySchool';
import { GradeError } from '../../src/errors/GradeError';

describe('適切な年齢の場合、インスタンスが返るべき', (): void => {
  test.each`
    age
    ${9}
    ${10}
    ${11}
  `('年齢: $age', ({ age }: { age: number }): void => {
    const actual = new UpperElementarySchool(age);
    expect(actual).toBeInstanceOf(UpperElementarySchool);
    expect(actual.age).toBe(age);
    expect(actual.grade).toBe('小学校高学年');
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
    expect(() => new UpperElementarySchool(age)).toThrowError(
      new GradeError(`${age}: 小学校高学年の年齢として正しい数字ではありません`),
    );
  });
});
