import type { ChildrenInterface } from '~/children/childrenInterface';

import { getChildren } from '~/children';
import { Adult } from '~/children/adult';
import { HighSchool } from '~/children/highSchool';
import { LowerElementarySchool } from '~/children/lowerElementarySchool';
import { MiddleSchool } from '~/children/middleSchool';
import { PreSchoolChild } from '~/children/preSchoolChild';
import { University } from '~/children/university';
import { UpperElementarySchool } from '~/children/upperElementarySchool';

describe('年齢ごとに正しく学年を取得できるべき', (): void => {
  test('0歳以下の場合、エラーが返るべき', () => {
    expect(() => getChildren(0)).toThrowError(new Error('0: は年齢として正しい数字ではありません'));
  });

  test.each`
    age   | expected
    ${1}  | ${PreSchoolChild}
    ${2}  | ${PreSchoolChild}
    ${3}  | ${PreSchoolChild}
    ${4}  | ${PreSchoolChild}
    ${5}  | ${PreSchoolChild}
    ${6}  | ${LowerElementarySchool}
    ${7}  | ${LowerElementarySchool}
    ${8}  | ${LowerElementarySchool}
    ${9}  | ${UpperElementarySchool}
    ${10} | ${UpperElementarySchool}
    ${11} | ${UpperElementarySchool}
    ${12} | ${MiddleSchool}
    ${13} | ${MiddleSchool}
    ${14} | ${MiddleSchool}
    ${15} | ${HighSchool}
    ${16} | ${HighSchool}
    ${17} | ${HighSchool}
    ${18} | ${University}
    ${19} | ${University}
    ${20} | ${University}
    ${21} | ${University}
    ${22} | ${Adult}
    ${23} | ${Adult}
  `(
    '年齢: $age, Class: $expected',
    ({ age, expected }: { age: number; expected: ChildrenInterface }): void => {
      expect(getChildren(age)).toBeInstanceOf(expected);
    },
  );
});
