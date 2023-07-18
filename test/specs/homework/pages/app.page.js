class AppPage {

    get toast() { return $('.toast-message'); }
    get navbarRight() { return $('.navbar-right'); }
    get userNameDropdown() { return this.navbarRight.$('[data-toggle="dropdown"]'); }

    get logoutLink() { return $('#logout-link'); }
    get fieldError() { return $('.invalid-feedback'); }

    constructor() {
        this.url = '/';
    }

    async open() {
        await browser.reloadSession();
        await browser.url(this.url);
    }

    async getToastMessage() {
        return await this.toast.getText();
    }

    async logout() {
        await this.userNameDropdown.click();
        await this.logoutLink.click();
    }

    async getCurrentUser() {
        return await this.userNameDropdown.$('strong').getText();
    }

    async getCurrentUserFullName() {
        return await this.userNameDropdown.getAttribute('title');
    }

}

export default AppPage;
