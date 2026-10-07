import {PaymentService} from '../../src/payment/payment'

describe('PaymentService', () => {
  let paymentService: PaymentService

  beforeEach(() => {
    paymentService = new PaymentService(100)
  })

  test('applies specified discount on the amount', () => {
    paymentService.applyDiscount(20)
    expect(paymentService.amount).toBe(80)
  })
  test('additional discount is applied on the current amount', () => {
    paymentService.applyDiscount(20)
    expect(paymentService.amount).toBe(80)
    paymentService.applyDiscount(10)
    expect(paymentService.amount).toBe(72)
  })
  test('does nothing when discount is less than 0', () => {
    paymentService.applyDiscount(-10)
    expect(paymentService.amount).toBe(100)
  })
  test('does nothing when discount is greater than 100', () => {
    paymentService.applyDiscount(110)
    expect(paymentService.amount).toBe(100)
  })
  test('successful payment returns isPaid true', () => {

    expect(paymentService.pay()).toBeTruthy()
  })
  test('isPaid returns false when payment is already successful', () => {
    paymentService.pay()
    expect(paymentService.pay()).toBeFalsy()
  })
  test('throws an error when initial amount is 0',() => {
    expect(() => new PaymentService(0)).toThrow('Initial Amount should be greater than 0')
  })
})

