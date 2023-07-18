export const defaultUserFullName = 'Karkulka Cervena';
export const defaultPassword = 'Nikomunereknu123';

const { randomUUID } = await import('node:crypto');

export function getRandomUser() {
    const id = randomUUID();
    return {
        email: `karkulka.cervena.${id}@tester.cz`,
        fullName: `${defaultUserFullName} ${id}`
    };
}

export function shortenFullName(fullName) {
    return `${fullName.substring(0,20)}...`;
}