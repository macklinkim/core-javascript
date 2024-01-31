const first = document.querySelector(".first");

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}
const second = next(first);
function prev(node) {
  node = node || second;
  if (typeof node === "string") {
    node = document.querySelector(node);
  }
  do {
    node = node.previousSibling;
    node ?? console.log("console.error();");
  } while (node.nodeType !== 1);
  return node;
}

console.log(second);

console.log(prev(".second"));
