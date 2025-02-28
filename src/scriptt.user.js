// ==UserScript==
// @name            tweb integrated to vscode
// @namespace       https://github.com/eric-gitta-moore/telegram-tweb-vscode-integration
// @version         2025.02.28
// @description     Telegram Web Version tweb integrated to vscode
// @author          https://eric-gitta-moore.github.io/
// @match           https://eric-r-moore.github.io/tweb/*
// @match           https://web.telegram.org/*
// @icon            https://web.telegram.org/favicon.ico
// @grant           GM_addStyle
// @grant           GM_getResourceText
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require         https://unpkg.com/watchjs@0.0.0/src/watch.min.js
// @downloadURL     https://github.com/eric-gitta-moore/telegram-tweb-vscode-integration/raw/main/src/scriptt.user.js
// @updateURL       https://github.com/eric-gitta-moore/telegram-tweb-vscode-integration/raw/main/src/scriptt.user.js
// ==/UserScript==

const injectCss = `
:root, #column-center .chats-container.tabs-container .tabs-tab {
    --primary-color: #333 !important;
    --message-out-background-color: #333 !important;
    --primary-text-color: #666 !important;
    --dark-primary-color: black !important;

    --find-me: #ff11ff;
}

@media only screen and (max-width: 600px) {
    .sidebar-header.topbar.has-avatar {
        display: none;
    }
}

input, [contenteditable=true] {
    caret-color: white !important;
}

.chat-input .btn-send {
    color: #5c5c5c !important;
}

.bubble-hover-reaction {
    display: none;
}
`

GM_addStyle(injectCss)
