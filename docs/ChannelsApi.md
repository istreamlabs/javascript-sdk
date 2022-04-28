# Isp.ChannelsApi

All URIs are relative to *https://api.istreamplanet.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteChannel**](ChannelsApi.md#deleteChannel) | **DELETE** /v2/channels/{channel-id} | Delete channel
[**getChannel**](ChannelsApi.md#getChannel) | **GET** /v2/channels/{channel-id} | Get Channel
[**getPlaybackConfig**](ChannelsApi.md#getPlaybackConfig) | **GET** /v2/channels/{channel-id}/playback | Get Channel Playback Config
[**listChannels**](ChannelsApi.md#listChannels) | **GET** /v2/channels | List channels
[**putChannel**](ChannelsApi.md#putChannel) | **PUT** /v2/channels/{channel-id} | Create/Update channel



## deleteChannel

> deleteChannel(channelId, opts)

Delete channel

Delete a channel and stop publishing.  This action is idempotent.

### Example

```javascript
import Isp from 'isp';
let defaultClient = Isp.ApiClient.instance;
// Configure OAuth2 access token for authorization: authcode
let authcode = defaultClient.authentications['authcode'];
authcode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: m2m
let m2m = defaultClient.authentications['m2m'];
m2m.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Isp.ChannelsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'ifMatch': ["null"], // [String] | Succeeds if the server's resource matches one of the passed values.
  'ifNoneMatch': ["null"], // [String] | Succeeds if the server's resource matches none of the passed values. On writes, the special value * may be used to match any existing value.
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Succeeds if the server's resource date is more recent than the passed date.
  'ifUnmodifiedSince': new Date("2013-10-20T19:20:30+01:00") // Date | Succeeds if the server's resource date is older or the same as the passed date.
};
apiInstance.deleteChannel(channelId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**| Unique channel identifier | 
 **ifMatch** | [**[String]**](String.md)| Succeeds if the server&#39;s resource matches one of the passed values. | [optional] 
 **ifNoneMatch** | [**[String]**](String.md)| Succeeds if the server&#39;s resource matches none of the passed values. On writes, the special value * may be used to match any existing value. | [optional] 
 **ifModifiedSince** | **Date**| Succeeds if the server&#39;s resource date is more recent than the passed date. | [optional] 
 **ifUnmodifiedSince** | **Date**| Succeeds if the server&#39;s resource date is older or the same as the passed date. | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## getChannel

> Channel getChannel(channelId, opts)

Get Channel

Get a channel&#39;s configuration

### Example

```javascript
import Isp from 'isp';
let defaultClient = Isp.ApiClient.instance;
// Configure OAuth2 access token for authorization: authcode
let authcode = defaultClient.authentications['authcode'];
authcode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: m2m
let m2m = defaultClient.authentications['m2m'];
m2m.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Isp.ChannelsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'ifMatch': ["null"], // [String] | Succeeds if the server's resource matches one of the passed values.
  'ifNoneMatch': ["null"], // [String] | Succeeds if the server's resource matches none of the passed values. On writes, the special value * may be used to match any existing value.
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Succeeds if the server's resource date is more recent than the passed date.
  'ifUnmodifiedSince': new Date("2013-10-20T19:20:30+01:00") // Date | Succeeds if the server's resource date is older or the same as the passed date.
};
apiInstance.getChannel(channelId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**| Unique channel identifier | 
 **ifMatch** | [**[String]**](String.md)| Succeeds if the server&#39;s resource matches one of the passed values. | [optional] 
 **ifNoneMatch** | [**[String]**](String.md)| Succeeds if the server&#39;s resource matches none of the passed values. On writes, the special value * may be used to match any existing value. | [optional] 
 **ifModifiedSince** | **Date**| Succeeds if the server&#39;s resource date is more recent than the passed date. | [optional] 
 **ifUnmodifiedSince** | **Date**| Succeeds if the server&#39;s resource date is older or the same as the passed date. | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## getPlaybackConfig

> ChannelPlayback getPlaybackConfig(channelId)

Get Channel Playback Config

Get a channel&#39;s playback configuration

### Example

```javascript
import Isp from 'isp';
let defaultClient = Isp.ApiClient.instance;
// Configure OAuth2 access token for authorization: authcode
let authcode = defaultClient.authentications['authcode'];
authcode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: m2m
let m2m = defaultClient.authentications['m2m'];
m2m.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Isp.ChannelsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
apiInstance.getPlaybackConfig(channelId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**| Unique channel identifier | 

### Return type

[**ChannelPlayback**](ChannelPlayback.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## listChannels

> [Summary2] listChannels(opts)

List channels

Get a list of your channels.

### Example

```javascript
import Isp from 'isp';
let defaultClient = Isp.ApiClient.instance;
// Configure OAuth2 access token for authorization: authcode
let authcode = defaultClient.authentications['authcode'];
authcode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: m2m
let m2m = defaultClient.authentications['m2m'];
m2m.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Isp.ChannelsApi();
let opts = {
  'cursor': "cursor_example", // String | Current page cursor
  'pageSize': 100, // Number | Number of items to return
  'q': "q_example" // String | Search query to match against for filtering a list of channels. This searches the channel ID, name, labels, and source ID.
};
apiInstance.listChannels(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Current page cursor | [optional] 
 **pageSize** | **Number**| Number of items to return | [optional] [default to 100]
 **q** | **String**| Search query to match against for filtering a list of channels. This searches the channel ID, name, labels, and source ID. | [optional] 

### Return type

[**[Summary2]**](Summary2.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## putChannel

> putChannel(channelId, opts)

Create/Update channel

Create or update an existing channel configuration.

### Example

```javascript
import Isp from 'isp';
let defaultClient = Isp.ApiClient.instance;
// Configure OAuth2 access token for authorization: authcode
let authcode = defaultClient.authentications['authcode'];
authcode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: m2m
let m2m = defaultClient.authentications['m2m'];
m2m.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Isp.ChannelsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'ifMatch': ["null"], // [String] | Succeeds if the server's resource matches one of the passed values.
  'ifNoneMatch': ["null"], // [String] | Succeeds if the server's resource matches none of the passed values. On writes, the special value * may be used to match any existing value.
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Succeeds if the server's resource date is more recent than the passed date.
  'ifUnmodifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Succeeds if the server's resource date is older or the same as the passed date.
  'validateOnly': true, // Boolean | Validate request but do not otherwise process it
  'putChannelRequest': new Isp.PutChannelRequest() // PutChannelRequest | 
};
apiInstance.putChannel(channelId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**| Unique channel identifier | 
 **ifMatch** | [**[String]**](String.md)| Succeeds if the server&#39;s resource matches one of the passed values. | [optional] 
 **ifNoneMatch** | [**[String]**](String.md)| Succeeds if the server&#39;s resource matches none of the passed values. On writes, the special value * may be used to match any existing value. | [optional] 
 **ifModifiedSince** | **Date**| Succeeds if the server&#39;s resource date is more recent than the passed date. | [optional] 
 **ifUnmodifiedSince** | **Date**| Succeeds if the server&#39;s resource date is older or the same as the passed date. | [optional] 
 **validateOnly** | **Boolean**| Validate request but do not otherwise process it | [optional] 
 **putChannelRequest** | [**PutChannelRequest**](PutChannelRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json

