export interface ResponseServer<T> {
  data: T
  statusCode: number
  message: string
  service: string
  success: boolean
  timestamp: string
}
