import type { Grade } from '../children/childrenInterface';

type GradeErrorMsg = `${number}: ${Grade}の年齢として正しい数字ではありません`;

/**
 * 年齢が適切ではない場合に発生するエラークラス
 */
export class GradeError extends Error {
  constructor(msg: GradeErrorMsg) {
    super(msg);
  }
}
