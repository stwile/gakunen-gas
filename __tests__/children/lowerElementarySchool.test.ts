import { LowerElementarySchool } from '../../src/children/lowerElementarySchool';
import { GradeError } from '../../src/errors/GradeError';

describe('適切な年齢の場合、インスタンスが返るべき', (): void => {
  test.each`
    age
    ${6}
    ${7}
    ${8}
  `('年齢: $age', ({ age }: { age: number }): void => {
    const actual = new LowerElementarySchool(age);
    expect(actual).toBeInstanceOf(LowerElementarySchool);
    expect(actual.age).toBe(age);
    expect(actual.grade).toBe('小学校低学年');
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
    expect(() => new LowerElementarySchool(age)).toThrowError(
      new GradeError(`${age}: 小学校低学年の年齢として正しい数字ではありません`),
    );
  });
});
