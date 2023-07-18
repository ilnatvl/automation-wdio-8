import AppPage from './app.page.js';

class LoginPage extends AppPage {

    constructor() {
        super();
        this.url = '/prihlaseni';
    }

    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('.btn-primary'); }

    async login(username, password) {
        await this.emailField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async getFieldError() {
        return await this.fieldError.getText();
    }

}

export default new LoginPage();
