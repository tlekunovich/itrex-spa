import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("SignUp")
        this.setCss("./static/css/signUp.css")
    }
    async getHtml() {
        return `
        <div class="main-container">
        <div class="main-container__menu" id=”app”>
            <form class="menu__form" type="submit">
                <h1 class="menu__title">Sign Up</h1>
                <div class="input-wrapper">
                    <div class="input__form" tabindex="1">
                        <label for="input__user"> </label>
                        <input id="input__firstName" type="text" class="input__user" placeholder="First Name">
                    </div>
                </div>
                <div class="input-wrapper">
                    <div class="input__form" tabindex="1">
                        <label for="input__user"></label>
                        <input id="input__lastName" type="text" class="input__user" placeholder="Last Name">
                    </div>
                </div>
                <div class="input-wrapper">
                    <div class="input__form" tabindex="1" id="input__form" id="input__form">
                        <label for="input__email"></label>
                        <input id="input__email" id="input__email" type="text" class="input__email" id="input__email" placeholder="Email">
                    </div>
                </div>
                <div class="input-wrapper">
                    <div class="input__form" tabindex="1" id="input__form__password1">
                        <label for="input__password1"></label>
                        <input id="input__password1" type="password" class="input__lock" placeholder="Password">
                        <div class="password_button-check" id="password_button-check1"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <div class="input__form" tabindex="1" id="input__form__password2">
                        <label for="input__password2"></label>
                        <input id="input__password2" type="password" class="input__check"
                            placeholder="Confirm Password">
                        <div class="password_button-check" id="password_button-check2"></div>
                    </div>
                </div>
                <button class="menu__button">
                    Sign Up
                </button>
            </form>
            <footer>
                <div class="footer__text">
                    Already have an account?
                </div>
                <a href="/signIn" data-link class="footer__a">Sign in</a>
            </footer>
        </div>
    </div>
        `;
    }
}