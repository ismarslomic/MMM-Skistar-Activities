import { GeoLocation } from './GeoLocation'

export type Occurrence = {
  IsWholeDay: boolean
  StartTime: string
  EndTime: string
  GeoLocation: GeoLocation | null
  LocationDescription: null | string
}
