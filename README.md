```typescript
import httpReq from 'httpReq'

let body = await httpReq.get('https://www.toggl.com/api/v8/me', {
  'Authorization': httpReq.basicAuthValue(token, 'api_token')
})
```
