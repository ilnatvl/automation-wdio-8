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

        const usernameMenu = $('.navbar-right .dropdown-toggle');
        await expect(usernameMenu).toBeDisplayed();
        await expect(usernameMenu).toHaveText(nameAndSurnameText); 

    });


    it('should not allow to register an existing user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu123'
        const errorText = 'Účet s tímto emailem již existuje'


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

        const registrationError = await $('span.invalid-feedback');
        await expect(registrationError).toBeDisplayed();
        await expect(registrationError).toHaveText(errorText);

    });

    it('should not allow registration with invalid password', async () => {

        const nameAndSurnameText = 'Sedy Vlk'
        const emailText = 'sedy.vlk@tester.cz'
        const passwordText = 'Nikomunereknu'
        const errorText = 'Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici'

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

        const registrationError = await $('span.invalid-feedback');
        await expect(registrationError).toBeDisplayed();
        await expect(registrationError).toHaveText(errorText);

    });


}); 
