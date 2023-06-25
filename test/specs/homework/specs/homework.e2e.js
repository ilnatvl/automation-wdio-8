import RegistrationPage from '../pages/registration.page.js'
describe('Registration page', async () => {

    beforeEach(async () => {
        await RegistrationPage.open();
    });

    it('should register a new user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu123'


        await RegistrationPage.setName(nameAndSurnameText);
        await RegistrationPage.setEmail(emailText);
        await RegistrationPage.setPassword(passwordText);
        await RegistrationPage.submitForm();

        await expect(await RegistrationPage.usernameMenu).toBeDisplayed();
        await expect(await RegistrationPage.usernameMenu).toHaveText(nameAndSurnameText);

    });


    it('should not allow to register an existing user', async () => {
        const nameAndSurnameText = 'Karkulka Cervena'
        const emailText = 'karkulka.cervena@tester.cz'
        const passwordText = 'Nikomunereknu123'
        const errorText = 'Účet s tímto emailem již existuje'

        await RegistrationPage.setName(nameAndSurnameText);
        await RegistrationPage.setEmail(emailText);
        await RegistrationPage.setPassword(passwordText);
        await RegistrationPage.submitForm();


        await expect(await RegistrationPage.registrationError).toBeDisplayed();
        await expect(await RegistrationPage.registrationError).toHaveText(errorText);

    });

    it('should not allow registration with invalid password', async () => {

        const nameAndSurnameText = 'Sedy Vlk'
        const emailText = 'sedy.vlk@tester.cz'
        const passwordText = 'Nikomunereknu'
        const errorText = 'Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici'

        await RegistrationPage.setName(nameAndSurnameText);
        await RegistrationPage.setEmail(emailText);
        await RegistrationPage.setPassword(passwordText);
        await RegistrationPage.submitForm();


        await expect(await RegistrationPage.registrationError).toBeDisplayed();
        await expect(await RegistrationPage.registrationError).toHaveText(errorText);

    });

});


