import RegistrationPage from '../pages/registration.page.js';
import {defaultPassword, defaultUserFullName, getRandomUserEmail} from '../fixtures.js'

describe('Registration page', async () => {

    beforeEach(async () => {
        await RegistrationPage.open();
    });

    it('should register a new user', async () => {
        const nameAndSurnameText = defaultUserFullName;
        const emailText = getRandomUserEmail();
        const passwordText = defaultPassword;

        await RegistrationPage.registerNewUser(nameAndSurnameText, emailText, passwordText);

        await expect(await RegistrationPage.userNameMenu).toBeDisplayed();
        await expect(await RegistrationPage.userNameMenu).toHaveText(nameAndSurnameText);

    });

    it('should not allow to register an existing user', async () => {
        const nameAndSurnameText = defaultUserFullName;
        const emailText = getRandomUserEmail();
        const passwordText = defaultPassword;
        const errorText = 'Účet s tímto emailem již existuje';

        await RegistrationPage.registerNewUser(nameAndSurnameText, emailText, passwordText);
        await RegistrationPage.open();
        await RegistrationPage.registerNewUser(nameAndSurnameText, emailText, passwordText);

        await expect(await RegistrationPage.registrationError).toBeDisplayed();
        await expect(await RegistrationPage.registrationError).toHaveText(errorText);

    });

    it('should not allow registration with invalid password', async () => {

        const nameAndSurnameText = 'Sedy Vlk';
        const emailText = 'sedy.vlk@tester.cz';
        const passwordText = '12345678';
        const errorText = 'Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici';

        await RegistrationPage.registerNewUser(nameAndSurnameText, emailText, passwordText);

        await expect(await RegistrationPage.registrationError).toBeDisplayed();
        await expect(await RegistrationPage.registrationError).toHaveText(errorText);

    });

});




