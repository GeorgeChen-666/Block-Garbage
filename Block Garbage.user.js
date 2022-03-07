// ==UserScript==
// @name         Block Garbage
// @namespace    http://tampermonkey.net/
// @version      0.1G
// @description  屏蔽脑残的支持乌克兰的条幅
// @author       You
// @match        https://github.com/
// @match        https://gitlab.com/
// @match        https://reactjs.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.location.origin === 'https://github.com') {
        document.querySelector('aside[aria-label="Explore"]').querySelectorAll('h3').forEach(e=>{
            if(e.innerText === 'Our response to the war in Ukraine') {
                const garbage = e.parentNode.parentNode;
                garbage.parentNode.removeChild(garbage);
            }
        })
    }
    if(document.location.origin === 'https://gitlab.com') {
        document.querySelector('#logo').innerHTML = `
        <svg width="24" height="24" class="tanuki-logo" viewBox="0 0 36 36">
            <path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"></path>
            <path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"></path>
            <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"></path>
            <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"></path>
            <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"></path>
            <path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"></path>
            <path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"></path>
       </svg>
       `
    }
    if(document.location.origin === 'https://reactjs.org') {
        const garbage = document.querySelector('a[href="https://opensource.fb.com/support-ukraine"]').parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        garbage.parentNode.removeChild(garbage);
    }
})();