export type GetMeOutput = {
  id: string
  email: string
  name: string
  role: Role
}
export type GetMeProps = () => Promise<GetMeOutput>
