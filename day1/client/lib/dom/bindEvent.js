function bindEvent(node, type, handler) {
  node = checkNode(node);
  node.addEventListener(type, handler, false);
  return () => node.removeEventListener(type, handler);
}
