import { ActivitiesService } from '../../src/backend/ActivitiesService'
import { Destination } from '../../src/types/Destination'
import { Language } from '../../src/types/Language'

describe('ActivitiesService', () => {
  test('test', async () => {
    const response = await ActivitiesService.requestActivities({
      fromDate: new Date('2023-03-11'),
      toDate: new Date('2023-03-11'),
      destinationFilter: Destination.Hemsedal,
      language: Language.Norsk,
    })

    expect(response).toBeDefined()
  })
})
