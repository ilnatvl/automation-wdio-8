export const defaultUserFullName = 'Karkulka Cervena';
export const defaultPassword = 'Nikomunereknu123';

const {
    randomUUID
} = await import('node:crypto');

export function getRandomUserEmail() {
    return 'karkulka.cervena' + randomUUID() + '@tester.cz';
}
