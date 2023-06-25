class RegistrationPage {
    constructor() {
        this.url = '/registrace';
    }

    get emailField() { return $('#email');}
    get passwordField() { return $('#password');}
    get submitButton() { return $('button.btn.btn-primary');}
    get passwordConfirmField() { return $('#password-confirm');} 
    get nameAndSurnameField() { return $('#name');}
    get registrationError() { return $('span.invalid-feedback');}
    get userNameMenu() { return $('.navbar-right .dropdown-toggle');}

    async open() {
        await browser.reloadSession();
        await browser.url(this.url);
    }  

    async setName(nameAndSurnameText) {
        await this.nameAndSurnameField.setValue(nameAndSurnameText);
    }
    async submitForm() {
        await this.submitButton.click();
    }
    async setPassword(passwordText) {
        await this.passwordField.setValue(passwordText);
        await this.passwordConfirmField.setValue(passwordText);}
    
    async setEmail(emailText) {
        await this.emailField.setValue(emailText);}
}

export default new RegistrationPage();