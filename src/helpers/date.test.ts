import { formatDate } from './date'

describe('formatDate', () => {
  const date = '2020-12-29T23:59:59.100Z'

  it('should return formatted date with year, month, day, hour and minute', async () => {
    const res = formatDate(date, {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
    expect(res).toEqual('terça-feira, 29/12/2020, 20:59')
  })

  it('should return formatted date with year, month, day', async () => {
    const res = formatDate(date, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    expect(res).toEqual('29/12/2020')
  })

  it('should return formatted date with hour and minute', async () => {
    const res = formatDate(date, { hour: '2-digit', minute: '2-digit' })
    expect(res).toEqual('20:59')
  })

  it('should return undefined', async () => {
    const res = formatDate(undefined, { day: '2-digit' })
    expect(res).toEqual(undefined)
  })
})
