# Isp.AuditOperationsApi

All URIs are relative to *https://api.istreamplanet.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChannelTimeline**](AuditOperationsApi.md#getChannelTimeline) | **GET** /v2/channels/{channel-id}/timeline | Get Channel Timeline



## getChannelTimeline

> [ChannelTimelineEntry] getChannelTimeline(channelId, opts)

Get Channel Timeline

Returns up to twenty items from the event timeline for a channel, sorted in reverse-chronological order.

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

let apiInstance = new Isp.AuditOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'offset': 56 // Number | Number of items to skip when calling a paginated API
};
apiInstance.getChannelTimeline(channelId, opts, (error, data, response) => {
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
 **offset** | **Number**| Number of items to skip when calling a paginated API | [optional] 

### Return type

[**[ChannelTimelineEntry]**](ChannelTimelineEntry.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

