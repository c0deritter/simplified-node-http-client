- `request(method: string, url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string>`
- `get(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string>`
- `getJson(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<{ [key: string]: any }>`
- `basicAuthField = "Authorization"`
- `basicAuthValue(username: string, password: string)`

```typescript
import httpReq from 'httpReq'

// method, url, headers, options
let body = await httpReq.request('GET', 'https://www.toggl.com/api/v8' + path, {
  'Authorization': httpReq.basicAuthValue(token, 'api_token')
})

// url, headers, options
let body = await httpReq.get('https://www.toggl.com/api/v8' + path, {
  'Authorization': httpReq.basicAuthValue(token, 'api_token')
})

// url, headers, options
let parsedJson = await httpReq.get('https://www.toggl.com/api/v8/me', {
  'Authorization': httpReq.basicAuthValue(token, 'api_token')
})
```
