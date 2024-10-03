// ==UserScript==
// @name         Aternos ADBLOCKER (isme8349)
// @namespace    https://aternos.org/*
// @version      0.3
// @description  Script to bypass adblock detection on Aternos with better functionality.
// @author       isme8349
// @include      https://aternos.org/*
// @grant        none
// ==/UserScript==

(function() {
    let tries = 50;

    setTimeout(doClear, 20);

    function doClear() {
        // برقراری شرایط بهتر برای انتخاب عناصر
        const hiddenElements = document.querySelectorAll('[style="display: none;"]');
        hiddenElements.forEach(e => {
            e.style.display = "";
        });

        const adReplacementElements = document.querySelectorAll(".ad-replacement");
        adReplacementElements.forEach(e => {
            if (e.parentElement) e.parentElement.style.display = "none";
        });

        const banIcon = document.querySelector('.fas.fa-ban');
        if (banIcon && banIcon.parentElement) {
            banIcon.parentElement.parentElement.parentElement.parentElement.style.display = "none";
        }

        if(tries-- > 0){
            setTimeout(doClear, 10);
        }
    }

    // کلیک بر روی دکمه خاص فقط در صورت وجود آن
    const startButton = document.querySelector("div > div > div:nth-child(2) > div:nth-child(3) > div.btn.btn-white");
    if (startButton) {
        startButton.click();
    }
})();