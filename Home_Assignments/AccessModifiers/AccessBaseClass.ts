/* Task Create a BankAccount class and explore how public, private, 
   and protected access modifiers work.

1. Create properties for accountNumber, accountHolder, and balance using different access modifiers. 
2. Create methods to deposit and withdraw money. 
3. Create an object of the class and try to access each property directly from outside the class. 
4. Create a child class and try to access the properties from the child class. 
5. Observe which properties are accessible and which are restricted. 
6. Based on your observation, explain when you would use public, private, 
   and protected in a real-time TypeScript application. */


// --- Base Class ---
export class BankAccount {
    // 1. Properties with different access modifiers
    public accountHolder: string;    // Accessible from anywhere
    protected accountNumber: string; // Accessible only within this class and subclasses
    private balance: number;         // Accessible ONLY within this class

    constructor(accountHolder: string, accountNumber: string, initialBalance: number) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public deposit(amount: number) {
        this.balance = this.balance + amount
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`)
    }

    public withDraw(amount: number) {
        this.balance = this.balance - amount
        console.log(`withDrawn: ${amount}. New Balance: ${this.balance}`)
    }

    protected getBalance(): number {
        return this.balance;
    }
}