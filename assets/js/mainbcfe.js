const headerHeight = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const footerHeight1 = document.querySelector('.footer-mb-b');
const fixedBottom = document.querySelector('.fixed-bottom');

function showTab(tabId) {
    var tabs = document.getElementsByClassName("item-tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.opacity = 0;
        tabs[i].classList.remove("active");
    }
    var btn = document.getElementsByClassName("item-btn");
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add('active');
    var tabToShow = document.querySelector('[data-tab="' + tabId + '"]');
    tabToShow.style.opacity = 1;
    tabToShow.classList.add("active");
    mainContainer.style.maxHeight = "none";
    requestAnimationFrame(adjustFooterPosition);

    if (window.innerWidth <= 768) {
    
        var count = 0;
        $('.item-tab.custiom.active .sp-btn-tab').each(function (index) {
            count++;
        });

        $('.footer-mb-b').hide();
        $('.show-btn-fix').show();
        $('.show-btn-fix img').attr("src", "./assets/images/icon-redirect-ft-btn.png");
        $('.show-btn-fix img').addClass('img-active');

        /*if (count >= 3) {
            $('.footer-mb-b').hide();
        } else {
            $('.footer-mb-b').show();
        }*/
    }
}

function getParamValue(paramName) {
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName)
            return pArr[1]; //return value
    }
}

var param1 = getParamValue('param1');

if (param1 == "show") {
    showTab("tab1-tab");
    $('.tab-content').addClass('active');
}

function showButtonTag() {
    $('.footer-mb-b').fadeToggle();

    $('.show-btn-fix img').toggleClass('img-active')
    if ($('.show-btn-fix img').hasClass('img-active')) {
        $('.show-btn-fix img').attr("src", "./assets/images/icon-redirect-ft-btn.png");
    } else {
        $('.show-btn-fix img').attr("src", "./assets/images/icon-redirect-ft-btn-close.png");
    }
}

function adjustFooterPosition() {

    const mainHeight = mainContainer.clientHeight;
    const footerHeight = footerHeight1.clientHeight;
    const headerHeight1 = headerHeight.clientHeight;
    const windowHeight = window.innerHeight;
    const windowWidth = mainContainer.clientWidth - 30;
    const newFooterHeight = windowWidth / 3.45;

    footerHeight1.style.height = `${newFooterHeight}px`;
    fixedBottom.style.height = `${newFooterHeight}px`;
}

