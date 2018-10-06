//write-us

  var writeusLink = document.querySelector(".write-us-link");
  var writeusForm = document.querySelector(".modal-write-us");
  var close = writeusForm.querySelector(".modal-close");
  var form = writeusForm.querySelector(".write-us-form");
  var userName = writeusForm.querySelector("[name=full-name]");
  var email = writeusForm.querySelector("[name=user-email]");
  var message = writeusForm.querySelector("[name=letter-text]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("full-name");
  } catch (err) {
    isStorageSupport = false;
  }

  writeusLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeusForm.classList.add("modal-show");
    if (storage) {
      userName.value = storage;
      email.focus();
    } else {
      userName.focus();
    }
  });
  
  form.addEventListener("submit", function(evt) {
    if (!userName.value || !email.value || !message.value) {
      evt.preventDefault();
      writeusForm.classList.remove("modal-error");
      writeusForm.offsetWidth = writeusForm.offsetWidth;
      writeusForm.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("client-name", clientName.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusForm.classList.remove("modal-show");
    writeusForm.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (writeusForm.classList.contains("modal-show")) {
        writeusForm.classList.remove("modal-show");
        writeusForm.classList.remove("modal-error");
      }
    }
  });

//map

  var mapLink = document.querySelector(".button-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });