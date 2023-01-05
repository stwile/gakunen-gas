import { getChildren } from './children/index';

import type { Grade } from './children/childrenInterface';

export const judgeGrade = (age: number): Grade => {
  return getChildren(age).grade;
};
