import { formatDate } from './date'

describe('formatDate', () => {
  const date = '2020-12-29T23:59:59.100Z'

  it('should return formatted date with year, month, day, hour and minute', async () => {
    const res = formatDate(
      date,
      {
        timeZone: 'America/Sao_Paulo',
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      },
      'en-US',
    )
    expect(res).toEqual('Tuesday, 12/29/2020, 08:59 PM')
  })

  it('should return formatted date with year, month, day', async () => {
    const res = formatDate(
      date,
      {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
      'en-US',
    )
    expect(res).toEqual('12/29/2020')
  })

  it('should return formatted date with hour and minute', async () => {
    const res = formatDate(
      date,
      {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
      },
      'en-US',
    )
    expect(res).toEqual('08:59 PM')
  })

  it('should return undefined', async () => {
    const res = formatDate(
      undefined,
      {
        timeZone: 'America/Sao_Paulo',
        weekday: 'long',
      },
      'en-US',
    )
    expect(res).toEqual(undefined)
  })
})
