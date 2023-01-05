import { GradeError } from '../errors/GradeError';

import type { Grade, ChildrenInterface } from './childrenInterface';

export class Adult implements ChildrenInterface {
  readonly grade: Grade = '成人';
  static readonly MIN_AGE: number = 22;
  static readonly MAX_AGE: number = 25;

  constructor(readonly age: number) {
    if (!Adult.validateAge(age)) {
      throw new GradeError(`${age}: ${this.grade}の年齢として正しい数字ではありません`);
    }
    this.age = age;
  }

  static validateAge(age: number): boolean {
    return Adult.MIN_AGE <= age && age < Adult.MAX_AGE;
  }
}
