const loginButton = document.getElementById('login-button');
if (loginButton) {
    loginButton.addEventListener('click', function() {
        document.getElementById('login-modal').style.display = 'block';
    });
    document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
        document.getElementById('login-modal').style.display = 'none';
    });
    
};

const createButton = document.getElementById('create-button');
if (createButton) {
    createButton.addEventListener('click', function() {
        document.getElementById('create-modal').style.display = 'block';
    });
    document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
        document.getElementById('create-modal').style.display = 'none';
    });
};

const deleteButton = document.getElementById('delete-button');
if (deleteButton) {
    deleteButton.addEventListener('click', function () {
        document.getElementById('delete-modal').style.display = 'block';
    });
    document.getElementById('delete-close-button').addEventListener('click', function () {
        document.getElementById('delete-modal').style.display = 'none';
    });
}

const imageInput = document.getElementById('imageInput');
if(imageInput) {
    imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
    });
};

function toggleCheckbox() {
    let menu = document.querySelector(".links");
    menu.classList.toggle("show");
  }


const sizesLink = document.getElementById('sizes-link');
const sizesModal = document.getElementById('sizes-modal');
if (sizesLink) {
    sizesLink.addEventListener('click', event => {
        sizesModal.style.display = 'block';
    });
    sizesModal.querySelector('.close-button').addEventListener('click', () => {
        sizesModal.style.display = 'none';
    });
};

toggleDarkMode = () => {
    document.body.classList.toggle("darkBody");
    document.getElementById("header").classList.toggle("darkHeader");
    document.getElementById("link1").classList.toggle("darkLink");
    document.getElementById("link2").classList.toggle("darkLink");
    document.getElementById("link3").classList.toggle("darkLink");
    document.getElementById("link4").classList.toggle("darkLink");
    document.getElementById("link5").classList.toggle("darkLink");
    document.getElementById("footer").classList.toggle("darkFooter");
    document.getElementById("footer-info").classList.toggle("darkFooter-info");


    const loginForm = document.getElementById("modal-content");
    const newSesionButton = document.getElementById("button-new-sesion");
    const newRegistrationButton = document.getElementById("register-button");
    const createForm = document.getElementById("create-content");
    const createProductButton = document.getElementById("button-new-product");
    if (loginForm) {
        loginForm.classList.toggle("darkModalContent");
        newSesionButton.classList.toggle("darkButtons");
        newRegistrationButton.classList.toggle("darkButtons");
    } else {
        createForm.classList.toggle("darkModalContent");
        createProductButton.classList.toggle("darkButtons");
    };

    const registerBack =  document.getElementById("register-back");
    const buttonRegister =  document.getElementById("button-register");
    if (registerBack) {
        registerBack.classList.toggle("darkItem-text");
        buttonRegister.classList.toggle("darkButtons");
    };

    const editForm = document.getElementById("edit-form");
    const editButtonSubmit = document.getElementById("edit-button-submit");
    const editCancel = document.getElementById("edit-cancel");
    if(editForm) {
        editForm.classList.toggle("darkBody");
        editButtonSubmit.classList.toggle("darkButtons");
        editCancel.classList.toggle("darkItem-text");
    };

    const deleteForm = document.getElementById("delete-button-form");
    const deleteButtonSubmit = document.getElementById("delete-button-submit");
    const deleteButton = document.getElementById("delete-button");
    const editButton = document.getElementById("edit-button");
    if(deleteForm) {
        deleteForm.classList.toggle("darkModalContent");
        deleteButtonSubmit.classList.toggle("darkButtons");
        deleteButton.classList.toggle("darkButtons");
        editButton.classList.toggle("darkButtons");
    };

    const editform = document.querySelectorAll(".edit-container");
    editform.forEach(editform => {
        editform.classList.toggle("darkForm");
    });

    const products = document.querySelectorAll(".item-card");
    products.forEach(product => {
        product.classList.toggle("darkItem-card");
    });
    const itemTexts = document.querySelectorAll(".item-text");
    itemTexts.forEach(itemText => {
        itemText.classList.toggle("darkItem-text");
    });
    const productsdashboard = document.querySelectorAll(".item-card-dashboard");
    productsdashboard.forEach(productsdashboard => {
        productsdashboard.classList.toggle("darkItem-card");
    });
    const itemTextsdashboard = document.querySelectorAll(".item-text-dashboard");
    itemTextsdashboard.forEach(itemTextsdashboard => {
        itemTextsdashboard.classList.toggle("darkItem-text");
    });

    const deliveryElements = document.querySelectorAll(".delivery");
    deliveryElements.forEach(element => {
        element.classList.toggle("darkDelivery");
    });

    const itemTitles = document.querySelectorAll(".item-field-title");
    itemTitles.forEach(itemTitles => {
        itemTitles.classList.toggle("darkBody");
    });

    const loginButton = document.getElementById("login-button");
    const logoutButton = document.getElementById("logout-button");
    if (loginButton) {
        loginButton.classList.toggle("darkButtons");
    } else {
        logoutButton.classList.toggle("darkButtons");
    };

    const sizeLink = document.getElementById("sizes-link");
    const sizeTable = document.getElementById("sizes-content");
    if(sizeLink) {
        sizeLink.classList.toggle("darkItem-text");
        sizeTable.classList.toggle("darkModalContent");
    };

    const tableHeader = document.querySelectorAll("th");
    tableHeader.forEach(header => {
        header.classList.toggle("dark-th");
    });

    const tableRow1 = document.querySelectorAll(".tr-1");
    tableRow1.forEach(row => {
        row.classList.toggle("dark-tr-1");
    });

    const tableRow2 = document.querySelectorAll(".tr-2");
    tableRow2.forEach(row => {
        row.classList.toggle("dark-tr-2");
    });

    const tableData = document.querySelectorAll("td");
    tableData.forEach(data => {
        data.classList.toggle("dark-td");
    });

    const itemHeader = document.getElementById("all-items-header");
    if (itemHeader) {
        itemHeader.classList.toggle("darkItem-text");
    }

    const createProduct = document.getElementById("create-button");
    if (createProduct) {
        createProduct.classList.toggle("darkButtons");
    }

    const main = document.getElementById("main");
    if (main) {
        main.classList.toggle("darkBody");
    }

    document.getElementById("sun-icon").classList.toggle("hidden");
    document.getElementById("moon-icon").classList.toggle("hidden");
    document.getElementById("sky").classList.toggle("darkSky");

    const isDarkMode = document.body.classList.contains("darkBody");
    localStorage.setItem("darkMode", isDarkMode.toString());
};

loadDarkModeState = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        toggleDarkMode();
    }
};

window.addEventListener("load", loadDarkModeState);

