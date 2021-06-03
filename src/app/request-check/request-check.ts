export interface requestList {
    id: number;
    date: number;
    description: string;
    confirmed: string;
    user: {
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
}