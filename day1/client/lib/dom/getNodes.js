function getNode(node, elem = document) {
  if (typeof node !== 'string') {
    throw new Error('type must be String');
  }
  if (elem.nodeType !== document.DOCUMENT_NODE) {
    elem = document.querySelector(elem);
  }
  return elem.querySelector(node);
}

function getNodes(node, elem = document) {
  if (typeof node !== 'string') {
    throw new Error('type must be String');
  }
  if (elem.nodeType !== document.DOCUMENT_NODE) {
    elem = document.querySelector(elem);
  }

  return elem.querySelectorAll(node);
}

function checkNode(node, param) {
  if (typeof node === 'string') node = getNode(node);
  return node;
}

function checkParam(param) {
  if (!param) throw new Error('Error: Invalid');
}
