export interface Payload<T> {
  uuid: string;
  event: string;
  value: T;
}
