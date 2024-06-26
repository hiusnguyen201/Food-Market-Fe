var asideCateChangeBtn = () => {
  const asidePlusBtn = document.getElementById("asidePlusBtn");
  const subasideList = document.getElementById("subaside-list");

  if (asidePlusBtn.classList.contains("fa-plus")) {
    asidePlusBtn.style.transform = "rotate(180deg)";
    asidePlusBtn.classList.replace("fa-plus", "fa-minus");
    subasideList.style.display = "block";
  } else {
    asidePlusBtn.style.transform = "rotate(0)";
    asidePlusBtn.classList.replace("fa-minus", "fa-plus");
    subasideList.style.display = "none";
  }
};

var asideRadioBtn = (type) => {
  const radios = document.getElementsByClassName(`${type}-radio`);
  const checkboxs = document.getElementsByClassName(`${type}-checkbox`);
  const items = document.querySelectorAll(`ul.filter-list li.${type}-item`);

  if (type === 'price') {
    items.forEach((item, index) => {
      if (checkboxs[index].classList.contains("fa-solid")) {
        checkboxs[index].classList.replace("fa-solid", "fa-regular");
        checkboxs[index].classList.replace("fa-square-check", "fa-square");
      } else {
        item.onclick = () => {
          checkboxs[index].classList.replace("fa-regular", "fa-solid");
          checkboxs[index].classList.replace("fa-square", "fa-square-check");
          radios[index].checked = true;
        }
      }
      return;
    });
  } else {
    items.forEach((label, index) => {
      label.onclick = () => {
        if (checkboxs[index].classList.contains("fa-solid")) {
          checkboxs[index].classList.replace("fa-solid", "fa-regular");
          checkboxs[index].classList.replace("fa-square-check", "fa-square");
          radios[index].checked = false;
        } else {
          checkboxs[index].classList.replace("fa-regular", "fa-solid");
          checkboxs[index].classList.replace("fa-square", "fa-square-check");
          radios[index].checked = true;
        }
      };
      return;
    });
  }
};

var sortRadioBtn = () => {
  const radios = document.getElementsByClassName("btn-quick-sort");
  const iconRadios = document.getElementsByClassName("radio-icon");
  const items = document.querySelectorAll("#sort-list li");

  items.forEach((item, index) => {
    if (iconRadios[index].classList.contains("fa-circle-dot")) {
      iconRadios[index].classList.replace("fa-circle-dot", "fa-circle");
      item.classList.remove('active');
    } else {
      item.onclick = () => {
        iconRadios[index].classList.replace("fa-circle", "fa-circle-dot");
        item.classList.add('active');
        radios[index].checked = true;
      }
    }
    return;
  });
}

var asideFilterChangeBtn = (type) => {
  const titleIcon = document.querySelector(`i.${type}-icon_minus`);
  const filterList = document.querySelector(`ul.${type}-list`);

  if (titleIcon.classList.contains('fa-minus')) {
    titleIcon.style.transform = "rotate(180deg)";
    titleIcon.classList.replace('fa-minus', 'fa-plus');
    filterList.style.display = 'none';
  } else {
    titleIcon.style.transform = "rotate(0)";
    titleIcon.classList.replace('fa-plus', 'fa-minus');
    filterList.style.display = 'block';
  }
}