import type { ChildrenInterface, Grade } from './childrenInterface';

import { GradeError } from '~/errors/GradeError';

export class HighSchool implements ChildrenInterface {
  readonly grade: Grade = '高校生';
  static readonly MIN_AGE: number = 15;
  static readonly MAX_AGE: number = 18;

  constructor(readonly age: number) {
    if (!HighSchool.validateAge(age)) {
      throw new GradeError(`${age}: ${this.grade}の年齢として正しい数字ではありません`);
    }
    this.age = age;
  }

  static validateAge(age: number): boolean {
    return HighSchool.MIN_AGE <= age && age < HighSchool.MAX_AGE;
  }
}
