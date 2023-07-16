class AppPage {

    get toast() { return $('.toast-message'); }
    get navbarRight() { return $('.navbar-right'); }
    get userNameDropdown() { return this.navbarRight.$('[data-toggle="dropdown"]'); }
    get logoutLink() { return $('#logout-link'); }

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
        return await this.userNameDropdown.getText();
    }

}

export default AppPage;
