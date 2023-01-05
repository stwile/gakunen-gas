import { HighSchool } from '../../src/children/highSchool';
import { GradeError } from '../../src/errors/GradeError';

describe('適切な年齢の場合、インスタンスが返るべき', (): void => {
  test.each`
    age
    ${15}
    ${16}
    ${17}
  `('年齢: $age', ({ age }: { age: number }): void => {
    const actual = new HighSchool(age);
    expect(actual).toBeInstanceOf(HighSchool);
    expect(actual.age).toBe(age);
    expect(actual.grade).toBe('高校生');
  });
});

describe('エラーが返るべき', (): void => {
  test.each`
    age
    ${1}  | ${'未就学児'}
    ${2}  | ${'未就学児'}
    ${4}  | ${'未就学児'}
    ${5}  | ${'未就学児'}
    ${6}  | ${'小学校低学年'}
    ${7}  | ${'小学校低学年'}
    ${8}  | ${'小学校低学年'}
    ${9}  | ${'小学校高学年'}
    ${10} | ${'小学校高学年'}
    ${11} | ${'小学校高学年'}
    ${12} | ${'中学生'}
    ${13} | ${'中学生'}
    ${14} | ${'中学生'}
    ${18} | ${'大学生'}
    ${19} | ${'大学生'}
    ${20} | ${'大学生'}
    ${21} | ${'大学生'}
    ${22} | ${'成人'}
    ${23} | ${'成人'}
  `('年齢: $age', ({ age }: { age: number }): void => {
    expect(() => new HighSchool(age)).toThrowError(
      new GradeError(`${age}: 高校生の年齢として正しい数字ではありません`),
    );
  });
});
