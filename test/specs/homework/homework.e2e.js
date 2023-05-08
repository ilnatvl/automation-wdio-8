describe('Homework', async () => {

    it('should open page and register new user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@babicka.les.cz'
        const passwordText = 'nikomunereknu'

        const baseUrl = 'https://team8-2022brno.herokuapp.com/registrace';

        await browser.reloadSession();
        await browser.url(baseUrl);

        const nameAndSurnameField = $('#name');
        await nameAndSurnameField.setValue(nameAndSurnameText);

        const emailField = $('#email');
        await emailField.setValue(emailText);

        const passwordField = $('#password');
        await passwordField.setValue(passwordText);

        const passwordConfirmField = $('#password-confirm');
        await passwordConfirmField.setValue(passwordText);

        const submitButton = $('button.btn.btn-primary');
        await submitButton.click();

    });

}); 
