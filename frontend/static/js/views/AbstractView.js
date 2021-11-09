export default class {
    constructor() {
    }

    setTitle(title) {
        document.title = title;
    }
    setCss(href) {
        var stylesheet = document.getElementById("stylesheet");
        stylesheet.setAttribute('href', href);
    }

    async getHtml() {
        return "";
    }

}