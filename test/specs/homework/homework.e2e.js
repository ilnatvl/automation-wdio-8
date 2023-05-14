describe('Registration page', async () => {

    it('should register a new user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu123'

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


    it('should not allow to register an existing user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu123'

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

        const registrationErrors = await $$('span.invalid-feedback');
        for (const row of registrationErrors) {
            console.log('Registration error: ' + await row.getText());
        }

    });

    it('should not allow registration with invalid password', async () => {

        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu'

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

        const registrationErrors = await $$('span.invalid-feedback');
        for (const row of registrationErrors) {
            console.log('Registration error: ' + await row.getText());
        }


    });


}); 
