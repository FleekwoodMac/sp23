function getParametersByName(e,a){a||(a=window.location.href);var o={};return e.forEach((function(e){var s=e.replace(/[\[\]]/g,"\\$&"),t=new RegExp("[?&]"+s+"(=([^&#]*)|&|#|$)").exec(a);t&&(t[2]?o[e]=decodeURIComponent(t[2].replace(/\+/g," ")):o[e]="")})),o}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),a=document.getElementById("textElement"),o="";switch(!0){case"Guest"===e.source:o=e.source+" get password below";break;case"ARUP"===e.hi:o=e.hi+" your password is 217";break;case"Capital Group"===e.hi:o=e.hi+" your password is 217";break;case"JJM"===e.hi:o=e.hi+" your password is 217";break;case"Live Nation"===e.hi:o=e.hi+" your password is 217";break;case"Vivian"===e.hello:o="";break;case"Lifeforce"===e.hello:o=e.hello+" your password is 141";break;case"Starz"===e.hello:o=e.hello+" your password is 151";break;case"iSpot"===e.hello:o=e.hello+" your password is 163";break;case"MillerKnoll"===e.hello:o=e.hello+" your password is 177";break}a.textContent=o}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),a=document.getElementById("submit-button"),o=document.getElementById("content");a.addEventListener("click",(function(){let a="";switch(e.value){case"217":case"141":case"151":case"163":case"177":a="pages/1/work.html";break;case"2330":case"2771":case"2882":a="pages/ad1/work.html";break;case"33300":case"37711":case"38822":a="pages/xd1/work.html";break}a?window.location.href=a:o.textContent="Password not recognized. Please try again."}))}));