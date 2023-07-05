"use strict";

document.querySelector('.root-nav').onclick = function (event) {
    console.log(event.target.nextElementSibling);
    if (event.target.nodeName !== 'SPAN') return;
    closeAllSubMenu(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle('sub-menu-active');
}

function closeAllSubMenu(current = null) {
    const parents = [];
    if (current) {
        let currentParent = current.parentNode;

        while (currentParent) {
            if (currentParent.classList.contains('root-nav')) break;
            if (currentParent.nodeName === 'UL') parents.push(currentParent);
            currentParent = currentParent.parentNode;
        }
    }

    const subMenu = document.querySelectorAll('.root-nav ul');
    Array.from(subMenu).forEach(item => {
        if (item !== current && !parents.includes(item)) {
            item.style.display = "none";
            item.classList.remove('sub-menu-active');
        } else {
            item.style.display = "block";
        }
    });
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener("click", kupiti);
});

function kupiti(event) {
  alert("Товар куплен");
  document.querySelectorAll('.root-nav ul').forEach(function (li) {
    if (!event.target.classList.contains('sub-menu-active') && li.style.display !== "none") {
      li.style.display = "none";
    }
  });
}

