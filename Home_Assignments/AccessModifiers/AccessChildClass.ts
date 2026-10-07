import { BankAccount } from "./AccessBaseClass";

class SavingAccount extends BankAccount {
    interestRate: number
    constructor(accountHolder: string, accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountHolder, accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    calInterest(): void {
        let currentBalance = this.getBalance()
        let interest = currentBalance * (this.interestRate / 100)
        const TotalAmount = currentBalance + interest
        console.log(`Current Balance: ${currentBalance}. Interest Amount: ${interest}`)
        console.log(`Total Balance : ${TotalAmount}`)
    }
}

let objSA = new SavingAccount("Palani", "ac23232", 1000, 0.3)
objSA.deposit(6000)
objSA.withDraw(4000)
objSA.calInterest()

