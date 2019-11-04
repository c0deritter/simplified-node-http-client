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
httpReq.getJson('https://example.com/api/users')
})
```

## Basic auth

```typescript
let headers = {
  'Authorization': httpReq.basicAuthValue('adam', '1234')
}

httpReq.get('https://example.com/api/users', headers)
```

## Options

<https://nodejs.org/api/http.html#http_http_request_url_options_callback>

- `agent` <http.Agent> | <boolean> Controls Agent behavior. Possible values
  - undefined (default): use http.globalAgent for this host and port.
  - Agent object: explicitly use the passed in Agent.
  - false: causes a new Agent with default values to be used.
- `auth` <string> Basic authentication i.e. 'user:password' to compute an Authorization header.
- `createConnection` <Function> A function that produces a socket/stream to use for the request when the agent option is not used. This can be used to avoid creating a custom Agent class just to override the default createConnection function. See agent.createConnection() for more details. Any Duplex stream is a valid return value.
- `defaultPort` <number> Default port for the protocol. Default: agent.defaultPort if an Agent is used, else undefined.
- `family` <number> IP address family to use when resolving host or hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used.
headers <Object> An object containing request headers.
- `host` <string> A domain name or IP address of the server to issue the request to. Default: 'localhost'.
- `hostname` <string> Alias for host. To support url.parse(), hostname will be used if both host and hostname are specified.
- `localAddress` <string> Local interface to bind for network connections.
- `method` <string> A string specifying the HTTP request method. Default: 'GET'.
- `path` <string> Request path. Should include query string if any. E.G. '/index.html?page=12'. An exception is thrown when the request path contains illegal characters. Currently, only spaces are rejected but that may change in the future. Default: '/'.
- `port` <number> Port of remote server. Default: defaultPort if set, else 80.
- `protocol` <string> Protocol to use. Default: 'http:'.
- `setHost` <boolean>: Specifies whether or not to automatically add the Host header. Defaults to true.
- `socketPath` <string> Unix Domain Socket (cannot be used if one of host or port is specified, those specify a TCP Socket).
- `timeout` <number>: A number specifying the socket timeout in milliseconds. This will set the timeout before the socket is connected.