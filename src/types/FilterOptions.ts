import { Category } from './Category'
import { Area } from './Area'
import { Destination } from './Destination'
import { Language } from './Language'

export type FilterOptions = {
  fromDate: Date
  toDate: Date
  destinationFilter: Destination
  areaFilter?: Area[]
  categoryFilter?: Category[]
  skip?: number
  take?: number
  language: Language
}
