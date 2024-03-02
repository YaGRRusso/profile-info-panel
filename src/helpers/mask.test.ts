import { mask } from './mask'

describe('mask', () => {
  it('should return masked and unmasked value', () => {
    const data = mask('000-000', '123456')

    expect(data.value).toBe('123-456')
    expect(data.unmaskedValue).toBe('123456')
  })

  it('should return masked and unmasked value with multiple masks', () => {
    const data1 = mask(['00-000', '000-000'], '12345')
    const data2 = mask(['00-000', '000-000'], '123456')

    expect(data1.value).toBe('12-345')
    expect(data1.unmaskedValue).toBe('12345')
    expect(data2.value).toBe('123-456')
    expect(data2.unmaskedValue).toBe('123456')
  })
})
