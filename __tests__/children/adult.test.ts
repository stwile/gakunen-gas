import { Adult } from '../../src/children/adult';
import { GradeError } from '../../src/errors/GradeError';

describe('適切な年齢の場合、インスタンスが返るべき', (): void => {
  test.each`
    age
    ${22}
    ${23}
    ${24}
  `('年齢: $age', ({ age }: { age: number }): void => {
    const actual = new Adult(age);
    expect(actual).toBeInstanceOf(Adult);
    expect(actual.age).toBe(age);
    expect(actual.grade).toBe('成人');
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
    ${15} | ${'高校生'}
    ${16} | ${'高校生'}
    ${17} | ${'高校生'}
    ${18} | ${'大学生'}
    ${19} | ${'大学生'}
    ${20} | ${'大学生'}
    ${21} | ${'大学生'}
  `('年齢: $age', ({ age }: { age: number }): void => {
    expect(() => new Adult(age)).toThrowError(
      new GradeError(`${age}: 成人の年齢として正しい数字ではありません`),
    );
  });
});
