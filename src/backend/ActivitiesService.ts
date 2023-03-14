import { FilterOptions } from '../types/FilterOptions'
import * as Log from 'logger'
import { Area } from '../types/Area'
import { Category } from '../types/Category'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { ActivityList } from '../types/ActivityList'

export class ActivitiesService {
  static endpointUrl = 'https://www.skistar.com/__api/calendar/find'
  static async requestActivities(filterOptions: FilterOptions): Promise<ActivityList> {
    Log.debug('Requesting activities from Skistar.')

    const requestBody = {
      fromDate: filterOptions.fromDate.toISOString().split('T')[0],
      toDate: filterOptions.toDate.toISOString().split('T')[0],
      destinationFilter: filterOptions.destinationFilter,
      areaFilter: filterOptions.areaFilter?.map((area: Area) => area.Info.Id),
      categoryFilter: filterOptions.categoryFilter?.map((category: Category) => category.Id),
      skip: filterOptions.skip,
      take: filterOptions.take,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': filterOptions.language.valueOf(),
      },
    }

    return new Promise((resolve, reject) => {
      axios
        .post<ActivityList>(ActivitiesService.endpointUrl, requestBody, config)
        .then((response: AxiosResponse<ActivityList>) => {
          Log.debug('Reading successfully activities from Skistar API.')
          resolve(response.data)
        })
        .catch((error: AxiosError) => {
          Log.error('Reading activities from Skistar API failed', error)
          reject(error)
        })
    })
  }
}
