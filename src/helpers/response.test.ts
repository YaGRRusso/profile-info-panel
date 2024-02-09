import { unwrap } from './response'

const successFn: any = async () => {
  return await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          status: 200,
          headers: { 'Content-type': 'application/json' },
          json: () => ({ status: 'success' }),
        }),
      100,
    ),
  )
}

describe('unwrap', () => {
  it('should return the function response', async () => {
    const res = await successFn().then(unwrap)
    expect(res).toEqual({ status: 'success' })
  })
})
