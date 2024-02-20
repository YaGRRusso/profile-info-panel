export type GetMeOutput = {
  id: string
  email: string
  name: string
  role: any
}
export type GetMeProps = () => Promise<GetMeOutput>

export type PostLoginInput = {
  email: string
  password: string
}
export type PostLoginOutput = string
export type PostLoginProps = (data: PostLoginInput) => Promise<PostLoginOutput>
