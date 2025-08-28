export type Signup = {
  name: string
  email: string
  password: string
}

export type Login = {
  email: string
  password: string
}

export type AuthResponse = {
  user: {
    name: string
    email: string
  }
}
