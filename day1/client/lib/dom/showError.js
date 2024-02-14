import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';
import { isString } from '../utils/typeOf.js';

export function showError(
  node,
  message = '정확한 이름을 입력해주세요',
  timeout
) {
  if (!isString(node)) node = getNode(node);
  const error = getNode(node);
  addClass(error, 'is-active');
  error.textContent = message;
  setTimeout(() => {
    removeClass(error, 'is-active');
  }, timeout);
}
