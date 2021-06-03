export interface userList {
    userId: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    primaryAccount: {
        accountBalance: number;
    },
    savingsAccount: {
        accountBalance: number;
    },
    enabled: number;
}