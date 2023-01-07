import type { Grade } from '~/children/childrenInterface';

import { judgeGrade } from '~/main';

describe('年齢ごとに正しく学年を取得できるべき', (): void => {
  test('0歳以下の場合、エラーが返るべき', () => {
    expect(() => {
      judgeGrade(0);
    }).toThrowError(new Error('0: は年齢として正しい数字ではありません'));
  });

  test.each`
    age   | expected
    ${1}  | ${'未就学児'}
    ${2}  | ${'未就学児'}
    ${3}  | ${'未就学児'}
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
    ${22} | ${'成人'}
    ${23} | ${'成人'}
  `('年齢: $age, 学年: $expected', ({ age, expected }: { age: number; expected: Grade }): void => {
    expect(judgeGrade(age)).toBe(expected);
  });
});
