// ==UserScript==
// @name         Change Google Calendar Chrome Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes the window coloring of the chrome window on Google Calendar
// @author       Aaron Clark
// @match        https://calendar.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js

// Additional note: Make this apply to any google site by changing the match to https://*.google.com/*
// ==/UserScript==

(function() {
    'use strict';

    const Colors = {
        BACKGROUND:   "#282a36",
        CURRENT_LINE: "#44475a",
        FOREGROUND:	  "#f8f8f2",
        COMMENT:      "#6272a4",
        CYAN:	      "#8be9fd",
        GREEN:	      "#50fa7b",
        ORANGE:	      "#ffb86c",
        PINK:	      "#ff79c6",
        PURPLE:	      "#bd93f9",
        RED:	      "#ff5555",
        YELLOW:	      "#f1fa8c",
    }

    const meta = document.createElement('meta')
    meta.name = 'theme-color';
    meta.content = Colors.BACKGROUND;
    document.getElementsByTagName('head')[0].appendChild(meta);


})();