import AbstractView from "./AbstractView.js";
// import angle from "./../../img/angle-right-b"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Restore Password")
        this.setCss("./static/css/doneRestorePassword.css")
        // this.setAngle(angle)
    }
    async getHtml() {
        return `
        <div class="main-container">
        <div class="main-container__menu">
            <form class="menu__form">
                <div class="menu_returnPage__group">
                    <a href="/restorePassword"><img
                            src="./img/angle-left-b.svg" class="menu__returnPage" /></a>
                    <h1 class="menu__title">Restore Password</h1>
                </div>
                <div class="menu__message">
                    An email has been sent to <a href="#">example@exam.com</a>. Check your inbox, and click the reset
                    link provided.
                </div>
            </form>
        </div>
    </div>
        `;
    }
}