# IStreamPlanetChannelsApi.ChannelPackagingContentProtectionSimple

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publishPoints** | [**[ChannelPackagingContentProtectionSimplePublishPoints]**](ChannelPackagingContentProtectionSimplePublishPoints.md) | Pub points where keys should be published. If multiple are specified, only one needs to succeed to consider the key successfully published. | [optional] 
**requirePublish** | **String** | Indicates which publish points must succeed for segment publishing to use the keys. | [optional] 



## Enum: RequirePublishEnum


* `ANY` (value: `"ANY"`)

* `ALL` (value: `"ALL"`)




