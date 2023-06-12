describe('Registration page', async () => {

    it('should register a new user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu123'

        await openRegistrationPage();
        await setName(nameAndSurnameText);
        await setEmail(emailText);
        await setPassword(passwordText);
        await submitForm();

        const usernameMenu = getUserNameMenu();
        await expect(usernameMenu).toBeDisplayed();
        await expect(usernameMenu).toHaveText(nameAndSurnameText); 

    });


    it('should not allow to register an existing user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu123'
        const errorText = 'Účet s tímto emailem již existuje'

        await openRegistrationPage();
        await setName(nameAndSurnameText);
        await setEmail(emailText);
        await setPassword(passwordText);
        await submitForm();

        const registrationError = await getRegistrationError();
        await expect(registrationError).toBeDisplayed();
        await expect(registrationError).toHaveText(errorText);

    });

    it('should not allow registration with invalid password', async () => {

        const nameAndSurnameText = 'Sedy Vlk'
        const emailText = 'sedy.vlk@tester.cz'
        const passwordText = 'Nikomunereknu'
        const errorText = 'Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici'

        await openRegistrationPage();
        await setName(nameAndSurnameText);
        await setEmail(emailText);
        await setPassword(passwordText);
        await submitForm();

        const registrationError = await getRegistrationError();
        await expect(registrationError).toBeDisplayed();
        await expect(registrationError).toHaveText(errorText);

    });

}); 

async function getRegistrationError() {
    return await $('span.invalid-feedback');
}

async function setName(nameAndSurnameText) {
    const nameAndSurnameField = $('#name');
    await nameAndSurnameField.setValue(nameAndSurnameText);
}

function getUserNameMenu() {
    return $('.navbar-right .dropdown-toggle');
}

async function submitForm() {
    const submitButton = $('button.btn.btn-primary');
    await submitButton.click();
}

async function setPassword(passwordText) {
    const passwordField = $('#password');
    await passwordField.setValue(passwordText);

    const passwordConfirmField = $('#password-confirm');
    await passwordConfirmField.setValue(passwordText);
}

async function setEmail(emailText) {
    const emailField = $('#email');
    await emailField.setValue(emailText);
}

async function openRegistrationPage() {
    const baseUrl = 'https://team8-2022brno.herokuapp.com/registrace';

    await browser.reloadSession();
    await browser.url(baseUrl);
}

