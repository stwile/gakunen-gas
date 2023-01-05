import { GradeError } from '../errors/GradeError';

import type { ChildrenInterface, Grade } from './childrenInterface';

export class UpperElementarySchool implements ChildrenInterface {
  readonly grade: Grade = '小学校高学年';
  static readonly MIN_AGE: number = 9;
  static readonly MAX_AGE: number = 12;

  constructor(readonly age: number) {
    if (!UpperElementarySchool.validateAge(age)) {
      throw new GradeError(`${age}: ${this.grade}の年齢として正しい数字ではありません`);
    }
    this.age = age;
  }

  static validateAge(age: number): boolean {
    return UpperElementarySchool.MIN_AGE <= age && age < UpperElementarySchool.MAX_AGE;
  }
}
