import { GradeError } from '../errors/GradeError';

import type { ChildrenInterface, Grade } from './childrenInterface';

export class MiddleSchool implements ChildrenInterface {
  readonly grade: Grade = '中学生';
  static readonly MIN_AGE: number = 12;
  static readonly MAX_AGE: number = 15;

  constructor(readonly age: number) {
    if (!MiddleSchool.validateAge(age)) {
      throw new GradeError(`${age}: ${this.grade}の年齢として正しい数字ではありません`);
    }
    this.age = age;
  }

  static validateAge(age: number): boolean {
    return MiddleSchool.MIN_AGE <= age && age < MiddleSchool.MAX_AGE;
  }
}
