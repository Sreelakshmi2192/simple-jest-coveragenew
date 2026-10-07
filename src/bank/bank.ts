import { PaymentService } from '../payment/payment'

export class Bank {
  private balance: number = 0

  deposit(amount: number): void {
    this.balance += amount
  }

  withdraw(amount: number): number {
    this.balance -= amount
    return amount
  }

  hasEnoughBalance(): boolean {
    return this.balance >= 25
  }

  getBalance(): number {
    return this.balance
  }
}
const payment = new PaymentService(100)
//payment.pay()
console.log(payment.pay())
//payment.pay()
console.log(payment.pay())