import { tryCatch } from './request'

const errorFn: any = async () => {
  return await new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('error')), 100),
  )
}

const successFn: any = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => resolve('success'), 100),
  )
}

describe('request', () => {
  it('should return the function response', async () => {
    const res1 = await tryCatch(successFn())
    expect(res1).toBe('success')

    const res2 = await tryCatch(successFn(), (err) => err)
    expect(res2).toBe('success')

    const res3 = await tryCatch(successFn(), () => 'error')
    expect(res3).toBe('success')
  })

  it('should return the function function response', async () => {
    const res1 = await tryCatch(() => successFn())
    expect(res1).toBe('success')

    const res2 = await tryCatch(
      () => successFn(),
      (err) => err,
    )
    expect(res2).toBe('success')

    const res3 = await tryCatch(
      () => successFn(),
      () => 'error',
    )
    expect(res3).toBe('success')
  })

  it('should catch the function error', async () => {
    const res1 = await tryCatch(errorFn())
    expect(res1).toBe(undefined)

    const res2 = await tryCatch(errorFn(), (err) => err)
    expect(res2).toBe(undefined)

    const res3 = await tryCatch(errorFn(), () => 'error')
    expect(res3).toBe(undefined)
  })

  it('should catch the function function error', async () => {
    const res1 = await tryCatch(() => errorFn())
    expect(res1).toBe(undefined)

    const res2 = await tryCatch(
      () => errorFn(),
      (err) => err,
    )
    expect(res2).toBe(undefined)

    const res3 = await tryCatch(
      () => errorFn(),
      () => 'error',
    )
    expect(res3).toBe(undefined)
  })
})
