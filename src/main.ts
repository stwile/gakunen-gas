export type Grade =
  | '未就学児'
  | '小学校低学年'
  | '小学校高学年'
  | '中学生'
  | '高校生'
  | '大学生'
  | '成人';

export const judgeGrade = (age: number): Grade | Error => {
  if (age <= 0) return new Error(`${age}: は年齢として正しい数字ではありません`);
  if (0 < age && age < 6) return '未就学児';
  if (6 <= age && age < 9) return '小学校低学年';
  if (9 <= age && age < 12) return '小学校高学年';
  if (12 <= age && age < 15) return '中学生';
  if (15 <= age && age < 18) return '高校生';
  if (18 <= age && age < 22) return '大学生';
  return '成人';
};
