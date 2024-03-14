const data = {
  HTML: [true, false],
  CSS: [true, false],
  JAVASCRIPT: [true, false],
  DOM: [true, false],
  REACT: [true, false],
  VUE: [true, false],
};

document.querySelector(".container").addEventListener("click", function (e) {
  const target = e.target;

  if (target.matches("#single-greater")) {
    moveCheckedToRight();
  } else if (target.matches("#double-greater")) {
    moveAllToRight();
  } else if (target.matches("#single-less")) {
    moveCheckedToLeft();
  } else if (target.matches("#double-less")) {
    moveAllToLeft();
  }
});

function moveCheckedToRight() {
  const lis = document.querySelectorAll(
    '.inner1 input[type="checkbox"]:checked'
  );
  const inner2 = document.querySelector(".inner2");
  lis.forEach((li) => {
    const label = li.nextElementSibling.textContent;
    const index = Object.keys(data).indexOf(label);
    if (index !== -1) {
      data[label][0] = false;
      data[label][1] = true;
      inner2.appendChild(li.parentElement);
    }
    li.checked = false;
  });
}

function moveAllToRight() {
  const lis = document.querySelectorAll('.inner1 input[type="checkbox"]');
  const inner2 = document.querySelector(".inner2");
  lis.forEach((li) => {
    const label = li.nextElementSibling.textContent;
    const index = Object.keys(data).indexOf(label);
    if (index !== -1) {
      data[label][0] = false;
      data[label][1] = true;
      inner2.appendChild(li.parentElement);
    }
    li.checked = false;
  });
}

function moveCheckedToLeft() {
  const lis = document.querySelectorAll(
    '.inner2 input[type="checkbox"]:checked'
  );
  const inner1 = document.querySelector(".inner1");
  lis.forEach((li) => {
    const label = li.nextElementSibling.textContent;
    const index = Object.keys(data).indexOf(label);
    if (index !== -1) {
      data[label][0] = true;
      data[label][1] = false;
      inner1.appendChild(li.parentElement);
    }
    li.checked = false;
  });
}

function moveAllToLeft() {
  const lis = document.querySelectorAll('.inner2 input[type="checkbox"]');
  const inner1 = document.querySelector(".inner1");
  lis.forEach((li) => {
    const label = li.nextElementSibling.textContent;
    const index = Object.keys(data).indexOf(label);
    if (index !== -1) {
      data[label][0] = true;
      data[label][1] = false;
      inner1.appendChild(li.parentElement);
    }
    li.checked = false;
  });
}
const listItems = document.querySelectorAll(".inner1 li, .inner2 li");
listItems.forEach((item) => {
  item.style.listStyleType = "none";
});
