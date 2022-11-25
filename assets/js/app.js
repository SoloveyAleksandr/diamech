document.addEventListener("DOMContentLoaded", () => {

  class Menu {
    constructor(menuElement, buttonElement) {
      this.menu = typeof menuElement === "string" ? document.querySelector(menuElement) : menuElement
      this.button = typeof buttonElement === "string" ? document.querySelector(buttonElement) : buttonElement
      this.overlay = document.createElement('div')
      this.overlay.hidden = true
      this._init()
    }

    _init() {
      document.body.appendChild(this.overlay)
      this.overlay.classList.add('overlay')

      this.overlay.addEventListener('click', this.toggleMenu.bind(this))
      this.button.addEventListener('click', this.toggleMenu.bind(this))
    }

    toggleMenu() {
      this.menu.classList.toggle('menu--open')
      this.button.classList.toggle('menu-button--active')
      this.overlay.hidden = !this.overlay.hidden

      if (this.isMenuOpen()) {
        this.disableScroll()
      } else {
        this.enableScroll()
      }
    }

    closeMenu() {
      this.menu.classList.remove('header__nav--active')
      this.button.classList.remove('header__menu-button--active')
      this.overlay.hidden = true

      this.enableScroll()
    }

    isMenuOpen() {
      return this.menu.classList.contains('menu--open')
    }

    disableScroll() {
      // Get the current page scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    }

    enableScroll() {
      window.onscroll = function () { };
    }
  }

  const menu = document.querySelector('.menu')
  const menuButton = document.querySelector('.menu-button')

  if (menu && menuButton) {
    new Menu(menu, menuButton)
  }

  class dropDown {
    constructor(listElement, buttonElement) {
      this.list = typeof listElement === "string" ? document.querySelector(listElement) : listElement
      this.button = typeof buttonElement === "string" ? document.querySelector(buttonElement) : buttonElement
      this._init()
    }

    _init() {
      this.button.addEventListener('click', this.toggleMenu.bind(this))
    }

    toggleMenu() {
      this.list.classList.toggle('_open')
      this.button.classList.toggle('_open')
    }
  }

  const headerMenu = document.querySelector('.header-nav__list')
  const headerMenuBtn = document.querySelector('.header-nav-btn')

  if (headerMenu && headerMenuBtn) {
    new dropDown(headerMenu, headerMenuBtn)
  }

  // class hideElements {
  //   constructor(elementsList, checkboxElement) {
  //     this.elements = elementsList;
  //     this.checkbox = typeof checkboxElement === "string" ? document.querySelector(checkboxElement) : checkboxElement
  //     this._init();
  //   }

  //   _init() {
  //     this.button.addEventListener('click', this.toggleState.bind(this))
  //   }

  //   toggleState() {
  //     if (this.checkbox.checked) {
  //       this.show();
  //     } else {
  //       this.hide();
  //     }
  //   }

  //   hide() {
  //     this.elements.forEach(element => {
  //       element.classList.remove("_open");
  //     });
  //   }

  //   show() {
  //     this.elements.forEach(element => {
  //       element.classList.add("_open");
  //     });
  //   }
  // }

  // const elementsForHide = document.querySelectorAll('.hidden');
  // const checkbox = document.getElementById('check');

  // if (elementsForHide && checkbox) {
  //   new hideElements(elementsForHide, checkbox)
  // }

  const container = document.querySelector('.balance');
  const elementsForHide = document.querySelectorAll('.hidden');
  const checkItem = document.getElementById('check');
  checkItem.onclick = () => {
    if (checkItem.checked) {
      show();
    } else hide();
  }

  function hide() {
    elementsForHide.forEach(el => el.classList.remove("_open"));
    container.classList.remove("_open");
  }

  function show() {
    elementsForHide.forEach(el => el.classList.add("_open"));
    container.classList.add("_open");
  }

  let x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    let x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
})