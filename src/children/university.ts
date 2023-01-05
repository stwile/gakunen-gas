import type { Grade, ChildrenInterface } from './childrenInterface';

import { GradeError } from '~/errors/GradeError';

export class University implements ChildrenInterface {
  readonly grade: Grade = '大学生';
  static readonly MIN_AGE: number = 18;
  static readonly MAX_AGE: number = 22;

  constructor(readonly age: number) {
    if (!University.validateAge(age)) {
      throw new GradeError(`${age}: ${this.grade}の年齢として正しい数字ではありません`);
    }
    this.age = age;
  }

  static validateAge(age: number): boolean {
    return University.MIN_AGE <= age && age < University.MAX_AGE;
  }
}
