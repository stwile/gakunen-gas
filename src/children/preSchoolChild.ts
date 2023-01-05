import { GradeError } from '../errors/GradeError';

import type { Grade, ChildrenInterface } from './childrenInterface';

export class PreSchoolChild implements ChildrenInterface {
  readonly grade: Grade = '未就学児';
  static readonly MIN_AGE: number = 1;
  static readonly MAX_AGE: number = 6;

  constructor(readonly age: number) {
    if (!PreSchoolChild.validateAge(age)) {
      throw new GradeError(`${age}: ${this.grade}の年齢として正しい数字ではありません`);
    }
    this.age = age;
  }

  static validateAge(age: number): boolean {
    return PreSchoolChild.MIN_AGE <= age && age < PreSchoolChild.MAX_AGE;
  }
}
