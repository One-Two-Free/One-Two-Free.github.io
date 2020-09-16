'use strict';
let serviceArea = document.querySelector('.service-group');
let serviceItem = document.querySelectorAll('.services-list .services-item');
let itemCurrentClass = '';

const onButtonClick = function (evt) {
  if(evt.target.tagName.toLowerCase() !== 'button'){
    return
  }

  if(evt.target.classList.contains('service-button-active')) {
    return
  }

  serviceArea.querySelector('.service-button-active').classList.remove('service-button-active');
  evt.target.classList.add('service-button-active');

  itemCurrentClass = "services-item-" + evt.target.classList[1].slice(15);

  for(var i = 0; i < serviceItem.length; i++) {

    if (itemCurrentClass == serviceItem[i].classList[1]) {
      serviceItem[i].hidden = false;
      continue;
    }
    serviceItem[i].hidden = true;

  };


};

serviceArea.addEventListener('click', onButtonClick);
