export class PaymentService {
  amount: number
  isPaid: boolean

  constructor(amount: number) {
    this.amount = amount
    this.isPaid = false
    if (this.amount <= 0) {
      throw new Error('Initial Amount should be greater than 0')
    }
  }
  applyDiscount(percent: number): void {
    if (percent < 0 || percent > 100 || this.isPaid) {
      return
    }
    this.amount = this.amount - this.amount * (percent / 100)
  }
  pay(): boolean {
    if(!this.isPaid)
    {
    this.isPaid =true
      return this.isPaid
    } else { return false }
    }}
