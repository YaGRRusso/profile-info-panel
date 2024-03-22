import { unwrap } from './response'

import { AxiosResponse } from 'axios'

const successFn = async () => {
  return (await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: 'success',
          status: 200,
        }),
      100,
    ),
  )) as unknown as AxiosResponse<any, any>
}

describe('unwrap', () => {
  it('should return the function response', async () => {
    const res = await successFn().then(unwrap)
    expect(res).toEqual('success')
  })
})
