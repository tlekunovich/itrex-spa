import AbstractView from "./AbstractView.js";
// import angle from "./../../img/angle-right-b"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Forgot Password")
        this.setCss("./static/css/restorePassword.css")
    }
    async getHtml() {
        return `
        <div class="main-container">
        <div class="main-container__menu">
            <form class="menu__form" type="submit" onsubmit="return validateForm()">
                <div class="menu_returnPage__group">
                    <a href="/signIn" data-link class="footer__a">
                    <img id="img" class="menu__returnPage" /></a>
                    <h1 class="menu__title">Restore Password</h1>
                </div>
                <div class="menu__message">
                    Please use your email address, and we’ll send you the link to reset your password
                </div>
                <div class="input-wrapper" id="input-wrapper">
                    <div class="input__form" tabindex="1" id="input__form">
                        <label for="input__email"></label>
                        <input type="text" class="input__email" placeholder="Email" id="input__email" >
                        <div class="password_button-check"></div>
                    </div>
                    <!-- <small class="waring__email">Password contain unsupported characters</small> -->
                </div>
                <button class="menu__button" id="menu__button" >
                    <a href="/doneRestorePassword" data-link
                        class="menu_forgotPassword">
                        Send Reset Link
                    </a>
                </button>
            </form>
        </div>
    </div>
        `;
    }
}