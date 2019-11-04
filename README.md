# API

- `request(method: string, url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string>`
- `get(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<string>`
- `getJson(url: string, headers: OutgoingHttpHeaders = {}, options: nativeHttps.RequestOptions = {}): Promise<{ [key: string]: any }>`
- `basicAuthField = "Authorization"`
- `basicAuthValue(username: string, password: string)`

# Examples

```typescript
import httpReq from 'httpReq'

// method, url, headers, options
httpReq.request('GET', 'https://example.com/api/users')

// url, headers, options
httpReq.get('https://example.com/api/users')

// url, headers, options
httpReq.get('https://example.com/api/users')
})
```

## Basic auth

```typescript
let headers = {
  'Authorization': httpReq.basicAuthValue('adam', '1234')
}

httpReq.get('https://example.com/api/users', headers)
```
