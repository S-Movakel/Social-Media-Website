// Sidebar Variables
const menuItems = document.querySelectorAll(".menu-item");

// Message Variables
const messageNotification = document.querySelector("#message-notifications");
const messagesBox = document.querySelector(".messages");
const messages = messagesBox.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Theme avariables
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const backgroundColor1 = document.querySelector('.bg-1');
const backgroundColor2 = document.querySelector('.bg-2');
const backgroundColor3 = document.querySelector('.bg-3');

// ============ Sidebar ============
// Remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    // Show Notifications POPUP
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ============ Messages ============
// Search Chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  messages.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// Search Chat
messageSearch.addEventListener("keyup", searchMessage);

// highlight message card when messages meni item is clicked
messageNotification.addEventListener("click", () => {
  messagesBox.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messagesBox.style.boxShadow = "none";
  }, 2000);
});

// ============ Theme / Display Customization ============
// opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// closes modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// close modal
themeModal.addEventListener("click", closeThemeModal);
// open modal
theme.addEventListener("click", openThemeModal);

// Fonts

// Remove active class from spans or fontsize slectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-10rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    // Change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// Remove active class from color
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// Change primary Colors
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    // Remove active class from color
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});


// Theme Background Values
let whiteColorLightness;
let lightColorLightness;
let darkColorLightness;

const changeBg = () => {
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

backgroundColor1.addEventListener('click', () => {
  // add active class
  backgroundColor1.classList.add('active');
  // remove active class from the others
  backgroundColor2.classList.remove('active');
  backgroundColor3.classList.remove('active');
  // remove customized change from local storage
  window.location.reload();
});

backgroundColor2.addEventListener('click', () => {
  whiteColorLightness = '20%';
  lightColorLightness = '15%';
  darkColorLightness = '95%';

  // add active class
  backgroundColor2.classList.add('active');
  // remove active class from the others
  backgroundColor1.classList.remove('active');
  backgroundColor3.classList.remove('active');
  changeBg();
});

backgroundColor3.addEventListener('click', () => {
  whiteColorLightness = '10%';
  lightColorLightness = '0%';
  darkColorLightness = '95%';

  // add active class
  backgroundColor3.classList.add('active');
  // remove active class from the others
  backgroundColor1.classList.remove('active');
  backgroundColor2.classList.remove('active');
  changeBg();
});