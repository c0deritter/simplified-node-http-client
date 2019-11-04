- `request(method: string, url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string>`
- `get(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string>`
- `getJson(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<{ [key: string]: any }>`
- `basicAuthField = "Authorization"`
- `basicAuthValue(username: string, password: string)`

```typescript
import httpReq from 'httpReq'

// method, url, headers, options
await httpReq.request('GET', 'https://example.com/api/users', {
  'Authorization': httpReq.basicAuthValue(token, 'api_token')
})

// url, headers, options
await httpReq.get('https://example.com/api/users', {
  'Authorization': httpReq.basicAuthValue(token, 'api_token')
})

// url, headers, options
await httpReq.get('https://example.com/api/users', {
  'Authorization': httpReq.basicAuthValue(token, 'api_token')
})
```
