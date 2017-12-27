// ==UserScript==
// @name        Steam - auto-accept, auto-redeem
// @include     https://store.steampowered.com/account/registerkey?key=*
// ==/UserScript==
/* This script is NOT future-proof, it is completely dependent on Steam using the
same id values for its website. This is deliberate. This way the script breaks
if Steam makes changes. If this script is broken, please contact the author */

//Check Steam Subscriber Agreement
document.getElementById("accept_ssa").checked = true;
//Click Continue
document.getElementById("register_btn").click();\

//Close the Window after 10 seconds
window.setTimeout(window.close(), 10000);

