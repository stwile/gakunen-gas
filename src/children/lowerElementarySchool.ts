import type { ChildrenInterface, Grade } from './childrenInterface';

import { GradeError } from '~/errors/GradeError';

export class LowerElementarySchool implements ChildrenInterface {
  readonly grade: Grade = '小学校低学年';
  static readonly MIN_AGE: number = 6;
  static readonly MAX_AGE: number = 9;

  constructor(readonly age: number) {
    if (!LowerElementarySchool.validateAge(age)) {
      throw new GradeError(`${age}: ${this.grade}の年齢として正しい数字ではありません`);
    }
    this.age = age;
  }

  static validateAge(age: number): boolean {
    return LowerElementarySchool.MIN_AGE <= age && age < LowerElementarySchool.MAX_AGE;
  }
}
