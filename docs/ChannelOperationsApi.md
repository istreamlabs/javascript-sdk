# Isp.ChannelOperationsApi

All URIs are relative to *https://api.istreamplanet.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearDvrWindow**](ChannelOperationsApi.md#clearDvrWindow) | **DELETE** /v2/channels/{channel-id}/dvr-window | Clear DVR Window
[**getSignals**](ChannelOperationsApi.md#getSignals) | **GET** /v2/channels/{channel-id}/signal | Get Signals
[**insertId3**](ChannelOperationsApi.md#insertId3) | **POST** /v2/channels/{channel-id}/id3 | Insert ID3
[**insertScte35**](ChannelOperationsApi.md#insertScte35) | **POST** /v2/channels/{channel-id}/scte35 | Insert SCTE-35
[**previewImage**](ChannelOperationsApi.md#previewImage) | **GET** /v2/channels/{channel-id}/preview-image | Get Preview Image
[**programEnd**](ChannelOperationsApi.md#programEnd) | **POST** /v2/channels/{channel-id}/program-end | Program End
[**programStart**](ChannelOperationsApi.md#programStart) | **POST** /v2/channels/{channel-id}/program-start | Program Start
[**signal**](ChannelOperationsApi.md#signal) | **POST** /v2/channels/{channel-id}/signal | Generic Signal
[**slateIn**](ChannelOperationsApi.md#slateIn) | **POST** /v2/channels/{channel-id}/slate | Slate in
[**slateOut**](ChannelOperationsApi.md#slateOut) | **DELETE** /v2/channels/{channel-id}/slate | Slate out
[**spliceEnd**](ChannelOperationsApi.md#spliceEnd) | **POST** /v2/channels/{channel-id}/splice-end | Splice Insert End
[**spliceStart**](ChannelOperationsApi.md#spliceStart) | **POST** /v2/channels/{channel-id}/splice-start | Splice Insert Start



## clearDvrWindow

> clearDvrWindow(channelId)

Clear DVR Window

Clears the DVR window for the channel by removing all video segments in the manifest from before the request.  This sets the earliest time a player can rewind to this point.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
apiInstance.clearDvrWindow(channelId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## getSignals

> [Segment] getSignals(channelId)

Get Signals

Returns the active signals for a channel.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
apiInstance.getSignals(channelId, (error, data, response) => {
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

[**[Segment]**](Segment.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## insertId3

> InsertMetadataResult insertId3(channelId, opts)

Insert ID3

Inserts the provided UTF-8 text metadata in the output stream embedded in a TXXX frame of a ID3 tag.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'accept': "accept_example", // String | List of accepted Content-Type headers
  'insertMetadataRequest': new Isp.InsertMetadataRequest() // InsertMetadataRequest | 
};
apiInstance.insertId3(channelId, opts, (error, data, response) => {
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
 **accept** | **String**| List of accepted Content-Type headers | [optional] 
 **insertMetadataRequest** | [**InsertMetadataRequest**](InsertMetadataRequest.md)|  | [optional] 

### Return type

[**InsertMetadataResult**](InsertMetadataResult.md)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## insertScte35

> insertScte35(channelId, opts)

Insert SCTE-35

Inserts a SCTE-35 formatted binary payload into the channel.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'scte35': new Isp.Scte35() // Scte35 | 
};
apiInstance.insertScte35(channelId, opts, (error, data, response) => {
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
 **scte35** | [**Scte35**](Scte35.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json


## previewImage

> previewImage(channelId, opts)

Get Preview Image

Get a static image of what your channel is outputting.  Valid Accept headers are: image/jpeg

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'accept': "accept_example" // String | List of accepted Content-Type headers
};
apiInstance.previewImage(channelId, opts, (error, data, response) => {
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
 **accept** | **String**| List of accepted Content-Type headers | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## programEnd

> programEnd(channelId, opts)

Program End

Inserts a &#39;program end&#39; SCTE-35 message into the channel.  This route should only be used for non-overlapping program markers.  If you want overlapping program makers please use Generic Signal instead.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'programSignal': new Isp.ProgramSignal() // ProgramSignal | 
};
apiInstance.programEnd(channelId, opts, (error, data, response) => {
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
 **programSignal** | [**ProgramSignal**](ProgramSignal.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json


## programStart

> programStart(channelId, opts)

Program Start

Inserts a &#39;program start&#39; SCTE-35 message into the channel.  This route should only be used for non-overlapping program markers.  If you want overlapping program makers please use Generic Signal instead.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'programSignal': new Isp.ProgramSignal() // ProgramSignal | 
};
apiInstance.programStart(channelId, opts, (error, data, response) => {
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
 **programSignal** | [**ProgramSignal**](ProgramSignal.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json


## signal

> signal(channelId, opts)

Generic Signal

Inserts a SCTE-35 message into the channel.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'genericSignal': [new Isp.GenericSignal()] // [GenericSignal] | 
};
apiInstance.signal(channelId, opts, (error, data, response) => {
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
 **genericSignal** | [**[GenericSignal]**](GenericSignal.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json


## slateIn

> slateIn(channelId, opts)

Slate in

Replaces the current video source with a slate image or video.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'slate': new Isp.Slate() // Slate | 
};
apiInstance.slateIn(channelId, opts, (error, data, response) => {
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
 **slate** | [**Slate**](Slate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json


## slateOut

> slateOut(channelId)

Slate out

Removes any active slate and show the source video content.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
apiInstance.slateOut(channelId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## spliceEnd

> spliceEnd(channelId, opts)

Splice Insert End

Inserts a &#39;splice insert end&#39; SCTE-35 message into the channel.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'spliceInsertEndSignal': new Isp.SpliceInsertEndSignal() // SpliceInsertEndSignal | 
};
apiInstance.spliceEnd(channelId, opts, (error, data, response) => {
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
 **spliceInsertEndSignal** | [**SpliceInsertEndSignal**](SpliceInsertEndSignal.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json


## spliceStart

> spliceStart(channelId, opts)

Splice Insert Start

Inserts a &#39;splice insert start&#39; SCTE-35 message into the channel.

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

let apiInstance = new Isp.ChannelOperationsApi();
let channelId = "channelId_example"; // String | Unique channel identifier
let opts = {
  'spliceInsertStartSignal': new Isp.SpliceInsertStartSignal() // SpliceInsertStartSignal | 
};
apiInstance.spliceStart(channelId, opts, (error, data, response) => {
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
 **spliceInsertStartSignal** | [**SpliceInsertStartSignal**](SpliceInsertStartSignal.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[authcode](../README.md#authcode), [m2m](../README.md#m2m)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json

