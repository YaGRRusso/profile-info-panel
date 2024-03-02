export type PostUserInput = {
  name: string
  birth: string
  description: string
  email: string
  password: string
  nickname: string
  phone: string
  picture: string
  postal: string
  presentation: string
  address: string
  title: string
}
export type PostUserOutput = {
  address: string
  birth: string
  createdAt: string
  description: string
  email: string
  id: string
  name: string
  nickname: string
  phone: string
  picture: string
  postal: string
  presentation: string
  role: string
  title: string
  updatedAt: string
}
export type PostUserProps = (data?: PostUserInput) => Promise<PostUserOutput>
