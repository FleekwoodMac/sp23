function getParametersByName(e,a){a||(a=window.location.href);var s={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(a);r&&(r[2]?s[e]=decodeURIComponent(r[2].replace(/\+/g," ")):s[e]="")})),s}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),a=document.getElementById("textElement"),s="";switch(!0){case"Guest"===e.source:s=e.source+" get password below";break;case"Alo"===e.hello:s=e.hello+" your password is 700";break;case"Clippers"===e.hello:s=e.hello+" your password is 122";break;case"FabFitFun"===e.hello:s=e.hello+" your password is 133";break;case"Mathnasium"===e.hello:s=e.hello+" your password is 800";break;case"Brilliant Earth"===e.hello:s=e.hello+" your password is 300";break;case"BrilliantEarth"===e.hello:s=e.hello+" your password is 300";break;case"SpaceX"===e.hello:s=e.hello+" Password Expired";break;case"Career Circle"===e.hello:s=e.hello+" get password below";break;case"Beyond Yoga"===e.hello:s=e.hello+" your password is 347";break;case"BeyondYoga"===e.hello:s=e.hello+" your password is 347";break;case"MindsDB"===e.hello:s=e.hello+" your password is 127";break;case"Amazon"===e.hello:s=e.hello+" your password is 517";break;case"UTA"===e.hello:s=e.hello+" your password is 177";break;case"Parsec"===e.hello:s=e.hello+" your password is 205";break;case"Fanantics"===e.hello:s=e.hello+" your password is 514";break;case"Carvana"===e.hello:s=e.hello+" your password is 548";break;case"Apple"===e.hello:s=e.hello+" your password is 555";break;case"Salesforce"===e.hello:s=e.hello+" your password is 607";break;case"TrueLearn"===e.hello:s=e.hello+" your password is 620";break}a.textContent=s}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),a=document.getElementById("submit-button"),s=document.getElementById("content");a.addEventListener("click",(function(){let a="";switch(e.value){case"122":case"133":case"127":case"177":case"205":a="pages1.2/24/work.html";break;case"":a="pages1.2/24ad/work.html";break;case"300":case"347":a="pages1.2/24snrds/work.html";break;case"548":case"555":case"607":a="pages1.2/24pd/work.html";break;case"517":case"514":case"620":a="pages1.2/24ux/work.html";break;case"700":a="pages1.2/24lead/work.html";break;case"800":a="pages1.2/24visd/work.html";break;case"mjw":a="pages1.2/24mj/work.html";break;case"508":a="pages1.2/24cc/work.html";break}a?window.location.href=a+"?v="+Math.random():s.textContent="Incorrect or expired password. Please try again."}))}));