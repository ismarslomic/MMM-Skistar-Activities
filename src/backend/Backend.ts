// noinspection JSVoidFunctionReturnValueUsed,JSUnusedGlobalSymbols

import * as NodeHelper from 'node_helper'
import * as Log from 'logger'
import { SocketNotification } from '../constants/SocketNotifications'
import { Config } from '../types/Config'
import * as https from 'https'

module.exports = NodeHelper.create({
  start(): void {
    Log.debug(`${this.name} is started!`)
  },

  stop(): void {
    Log.debug(`${this.name} is started!`)
  },

  async socketNotificationReceived(notification: SocketNotification, config: Config) {
    if (notification === SocketNotification.GREETINGS_TEXT_REQUEST) {
      Log.debug(`${this.name} received a socket notification: '${notification}' with config: ${JSON.stringify(config)}`)

      const postData = JSON.stringify({
        fromDate: '2023-03-11',
        toDate: '2023-03-11',
        destinationFilter: 'hemsedal',
        areaFilter: ['5fa13805c9e29924c09d74ef', '5fa1380cc9e29924c09d74f0'],
        categoryFilter: [
          '5fa13880c9e29924c09d74f5',
          '5fa13936c9e29924c09d74f6',
          '5fe0c69fc9e2993b906dbcc1',
          '5ef34bccc9e29903b8e808ad',
        ],
        skip: null,
        take: 18,
      })

      const options = {
        hostname: 'www.skistar.com',
        port: 443,
        path: '/__api/calendar/find/',
        method: 'POST',
        headers: {
          'Accept-Language': 'en',
          'Content-Type': 'application/json',
          'Content-Length': postData.length,
        },
      }

      const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode)
        console.log('headers:', res.headers)
        res.on('data', (d) => {
          console.log('data:', d)
          const payload = {
            text: `${this.name} says: ${d[0]['Heading']}`,
            lastUpdated: Date.now(),
          }
          this.sendSocketNotification(SocketNotification.GREETINGS_TEXT_RESPONSE, payload)
        })
      })

      req.on('error', (e) => {
        console.log('error:', e)
        console.error(e)
      })
      console.log('ending request')
      req.end()
    } else {
      Log.error(`${this.name} received unknown socket notification: '${notification}'`)
    }
  },
})
