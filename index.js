function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let elements = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < elements.length; i++) {
    let oldInteger = parseInt(elements[i].innerHTML);
    elements[i].innerHTML = oldInteger + n;
  }
}

function deepestChild(selectorElement = '#grand-node') {
  let node = document.querySelector(selectorElement)
  if (node.querySelectorAll('div').length > 0) {
    let newNode = selectorElement + ' div'
    return deepestChild(newNode);
  } else {
    return node;
  }
}
