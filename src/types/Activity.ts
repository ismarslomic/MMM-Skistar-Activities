import { Category } from './Category'
import { Destination } from './Destination'
import { Area } from './Area'

export type Activity = {
  Id: string
  Destination: Destination
  Heading: string
  Date: string
  DayOfMonth: string
  Month: string
  Times: string[]
  Description: string
  ImageUrl: string
  Categories: Category[]
  Tags: string[]
  MoreInfoUrl: null | string
  MoreInfoUrlText: null | string
  BookingUrl: null
  Areas: Area[]
  NumberOfOccurrences: number
  HasMultipleAdditionalTimes: boolean
  AdditionalTimesCount: null
}
