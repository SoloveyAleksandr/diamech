document.addEventListener("DOMContentLoaded", () => {

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

  const container = document.querySelector('.balance');
  const elementsForHide = document.querySelectorAll('.hidden');
  const checkItem = document.getElementById('KF');
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

  class Select {
    constructor(selectContainer) {
      this.selectContainer = selectContainer;
      this.button = this.selectContainer.querySelector('.custom-select__btn');
      this.buttonText = this.button.querySelector('.custom-select__btn-text');
      this.select = this.selectContainer.querySelector('.custom-select__select');
      this.options = this.select.querySelectorAll('.custom-select__option');
      this.selectList = this.selectContainer.querySelector('.custom-select-list');
      this.listItemTemplate = this.selectList.querySelector('template')
        .content.cloneNode(true).querySelector('.custom-select-list__item');
      this.init();
    }

    init() {
      const listFragment = new DocumentFragment();
      this.options.forEach((item, index) => {
        const listItem = this.listItemTemplate.cloneNode(true);
        if (item.selected) {
          listItem.classList.add('_default');
          this.buttonText.innerHTML = item.innerHTML
        }
        listItem.dataset.value = item.value;
        listItem.innerHTML = item.innerHTML;
        listItem.onclick = (e) => this.setValue(e, listItem);
        listFragment.appendChild(listItem);
      });
      this.selectList.innerHTML = '';
      this.selectList.append(listFragment);
      this.button.onclick = (e) => this.setOpen(e);
    }

    setOpen(e) {
      this.selectList.classList.toggle('_open');
      this.button.classList.toggle('_open');
      e.stopPropagation();
    }

    close() {
      this.selectList.classList.remove('_open');
      this.button.classList.remove('_open');
    }

    setValue(e, item) {
      this.select.onchange && this.select.onchange();
      this.select.value = item.dataset.value;
      this.buttonText.innerHTML = item.innerHTML;
      this.button.classList.add('_selected');
      this.removeSelectedClass();
      this.addActiveClass.call(item);
      this.setOpen(e);
      e.stopPropagation();
    }

    setDefaultValue() {
      this.select.value = this.select.children[0].value;
      this.buttonText.innerHTML = this.select.children[0].innerHTML;
    }

    removeSelectedClass() {
      const selectItems = this.selectList.querySelectorAll('.custom-select-list__item');
      selectItems.forEach((item) => item.classList.remove('_selected'));
    }

    addActiveClass() {
      this.classList.add('_selected');
    }

    hide() {
      this.selectContainer.classList.add('_hidden');
    }

    show() {
      this.selectContainer.classList.remove('_hidden');
    }
  }

  const selectContainer_1 = document.querySelector('#custom-select_1');
  const TVGSelectContainer = selectContainer_1 ? new Select(selectContainer_1) : null;

  const selectContainer_2 = document.querySelector('#custom-select_2');
  const TVVSelectContainer = selectContainer_2 ? new Select(selectContainer_2) : null;

  const selectContainer_3 = document.querySelector('#custom-select_3');
  const regimSelectContainer = selectContainer_3 ? new Select(selectContainer_3) : null;

  const TGVRadio = document.querySelector('#TGV-radio');
  const TVVRadio = document.querySelector('#TVV-radio');
  TGVRadio.onchange = changeSelectedList;
  TVVRadio.onchange = changeSelectedList;

  function changeSelectedList() {
    if (TGVRadio.checked) {
      TVGSelectContainer.show();
      TVVSelectContainer.hide();
      TVVSelectContainer.close();
      TVVSelectContainer.setDefaultValue();
    } else if (TVVRadio.checked) {
      TVVSelectContainer.show();
      TVGSelectContainer.hide();
      TVGSelectContainer.close();
      TVGSelectContainer.setDefaultValue();
    }
  }
  changeSelectedList();

  document.onclick = (e) => {
    TVGSelectContainer.close();
    TVVSelectContainer.close();
    regimSelectContainer.close();
  }

  const form = document.querySelector('.balance-form');
  // form.onsubmit = (e) => {
  //   e.preventDefault();
  //   console.log(new FormData(form));
  // }

  DRAW();
})

//////