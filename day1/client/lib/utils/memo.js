console.log('object');

import { getNode } from '../dom/getNode.js';

export const memo = (() => {
  const cache = {};

  return function (key, callback) {
    if (!callback) return cache[key];
    if (cache[key]) {
      console.warn(`${key} 이미 존재 `);
      return cache[key];
    }
    cache[key] = callback();
  };
})();
