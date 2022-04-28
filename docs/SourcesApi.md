# Isp.SourcesApi

All URIs are relative to *https://api.istreamplanet.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSource**](SourcesApi.md#getSource) | **GET** /v2/sources/{source-id} | Get Source
[**listSources**](SourcesApi.md#listSources) | **GET** /v2/sources | List Sources



## getSource

> Source getSource(sourceId)

Get Source

Get a source&#39;s configuration

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

let apiInstance = new Isp.SourcesApi();
let sourceId = "sourceId_example"; // String | Unique source identifier
apiInstance.getSource(sourceId, (error, data, response) => {
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
 **sourceId** | **String**| Unique source identifier | 

### Return type

[**Source**](Source.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## listSources

> [Summary] listSources(opts)

List Sources

Get a list of sources that are used to create channels.

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

let apiInstance = new Isp.SourcesApi();
let opts = {
  'cursor': "cursor_example", // String | Current page cursor
  'pageSize': 100 // Number | Number of items to return
};
apiInstance.listSources(opts, (error, data, response) => {
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

### Return type

[**[Summary]**](Summary.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

