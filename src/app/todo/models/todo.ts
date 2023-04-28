import {FormControl} from "@angular/forms";

export interface Todo {
  id:number;
  name:string;
  status:boolean;
}
export interface TodoFormReq {
  name: FormControl<string>,
}
export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
