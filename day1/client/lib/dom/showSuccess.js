import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';
import { isString } from '../utils/typeOf.js';

export function showSuccess(node, message) {
  if (!isString(node)) node = getNode(node);
  const success = getNode(node);
  addClass(success, 'is-active');
  success.textContent = message;
  setTimeout(() => {
    removeClass(success, 'is-active');
  });
}
