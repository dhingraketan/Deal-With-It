import { TransType } from "./TransType"

export class Customer{
  id!: number
  name!: string
  phoneNum!: number
  currentProvider!: string
  monthlyBill!: number
  currentData!: number
  numLines!: number
  transType!: TransType
  phoneChoice!: string
  dataChoice!: number
  homeService!: string
}