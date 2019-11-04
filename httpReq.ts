import * as nativeHttps from 'https'
import { OutgoingHttpHeaders } from 'http';

export class HttpRequester {

  async request(method: string, url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {

      options.method = method
      options.headers = headers

      nativeHttps.get(url, options, response => {
        response.setEncoding('utf8')
        let data = ''

        response.on('data', chunk => {
          data += chunk
        })
        
        response.on('end', () => {
          resolve(data)
        })

        if (response.statusCode != 200) {
          reject(response.statusMessage)
        }
      }).on('error', e => {
        reject(e)
      })
    })
  }

  async get(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string> {
    return this.request('GET', url, headers, options)
  }

  async getJson(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<{ [key: string]: any }> {
    let json = await this.get(url, headers, options)
    return JSON.parse(json)
  }
  
  readonly basicAuthField = "Authorization"

  basicAuthValue(username: string, password: string) {
    return "Basic " + Buffer.from(username + ":" + password, 'utf-8').toString('base64')
  } 
}

export default new HttpRequester()