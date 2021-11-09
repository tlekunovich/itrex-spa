import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("SignIn")
        this.setCss("./static/css/signIn.css")
    }
    async getHtml() {
        return `
        <div class="main-container">
        <div class="main-container__menu">
            <form class="menu__form" type="submit">
                <h1 class="menu__title">Sign In</h1>
                <div class="input-wrapper">
                    <div class="input__form" tabindex="1" id="input__form">
                        <label for="input__email"></label>
                        <input id="input__email" type="text" class="input__email" placeholder="Email">
                    </div>
                </div>
                <div class="input-wrapper">
                    <div class="input__form" tabindex="1" id="input__form__password1">
                        <label for="input__password1"></label>
                        <input id="input__password1" type="password" class="input__lock" id="input__email" placeholder="Password">
                        <div class="password_button-check" id="password_button-check1"></div>
                    </div>
                </div>

                <button class="menu__button" type="submit">
                    Sign In
                </button>
                <a href="/restorePassword" data-link class="menu_forgotPassword">Forgot Password?</a>
            </form>
            <footer>
                <div class="footer__text">
                    Don't have an account?
                </div>
                <a href="/" data-link class="footer__a">Sign up</a>
            </footer>
        </div>
    </div>
        `;
    }
}