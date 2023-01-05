import { Adult } from './adult';
import { HighSchool } from './highSchool';
import { LowerElementarySchool } from './lowerElementarySchool';
import { MiddleSchool } from './middleSchool';
import { PreSchoolChild } from './preSchoolChild';
import { University } from './university';
import { UpperElementarySchool } from './upperElementarySchool';

import type { ChildrenInterface } from './childrenInterface';

export const getChildren = (age: number): ChildrenInterface => {
  if (age <= 0) throw new Error(`${age}: は年齢として正しい数字ではありません`);
  if (PreSchoolChild.validateAge(age)) return new PreSchoolChild(age);
  if (LowerElementarySchool.validateAge(age)) return new LowerElementarySchool(age);
  if (UpperElementarySchool.validateAge(age)) return new UpperElementarySchool(age);
  if (MiddleSchool.validateAge(age)) return new MiddleSchool(age);
  if (HighSchool.validateAge(age)) return new HighSchool(age);
  if (University.validateAge(age)) return new University(age);
  return new Adult(age);
};
