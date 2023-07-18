import RegistrationPage from '../pages/registration.page.js';
import LoginPage from '../pages/login.page.js';
import { defaultPassword, getRandomUser, shortenFullName } from '../fixtures.js'

describe('Registration page', async () => {

    beforeEach(async () => {
        await RegistrationPage.open();
    });

    it('should allow registration of a new user', async () => {
        const randomUser = getRandomUser();
        const fullNameText = randomUser.fullName;
        const shortFullNameText = shortenFullName(fullNameText);
        const emailText = randomUser.email;
        const passwordText = defaultPassword;

        await RegistrationPage.registerNewUser(fullNameText, emailText, passwordText);

        await expect(await RegistrationPage.userNameDropdown).toBeDisplayed();
        await expect(await RegistrationPage.getCurrentUser()).toEqual(shortFullNameText);
        await expect(await RegistrationPage.getCurrentUserFullName()).toEqual(fullNameText);

        await LoginPage.open();
        await LoginPage.login(emailText, passwordText);
        await expect(await LoginPage.userNameDropdown).toBeDisplayed();
        await expect(await LoginPage.getCurrentUser()).toEqual(shortFullNameText);
        await expect(await LoginPage.getCurrentUserFullName()).toEqual(fullNameText);
    });

    it('should not allow to register the existing user', async () => {
        const randomUser = getRandomUser();
        const fullNameText = randomUser.fullName;
        const emailText = randomUser.email;
        const passwordText = defaultPassword;
        const errorText = 'Účet s tímto emailem již existuje';

        await RegistrationPage.registerNewUser(fullNameText, emailText, passwordText);
        await RegistrationPage.open();
        await RegistrationPage.registerNewUser(fullNameText, emailText, passwordText);

        await expect(await RegistrationPage.fieldError).toBeDisplayed();
        await expect(await RegistrationPage.fieldError).toHaveText(errorText);

    });

    it('should not allow registration with invalid password', async () => {

        const fullNameText = 'Sedy Vlk';
        const emailText = 'sedy.vlk@tester.cz';
        const passwordText = '12345678';
        const errorText = 'Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici';

        await RegistrationPage.registerNewUser(fullNameText, emailText, passwordText);

        await expect(await RegistrationPage.fieldError).toBeDisplayed();
        await expect(await RegistrationPage.fieldError).toHaveText(errorText);

    });

});
