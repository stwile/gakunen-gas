export type Grade =
  | '未就学児'
  | '小学校低学年'
  | '小学校高学年'
  | '中学生'
  | '高校生'
  | '大学生'
  | '成人';

export interface ChildrenInterface {
  readonly age: number;
  readonly grade: Grade;
}
