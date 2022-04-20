# IStreamPlanetChannelsApi.PutChannelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | **String** | An optional URL to a JSON Schema document describing this resource | [optional] 
**created** | **Date** | Date and time the channel was created. | [optional] [readonly] 
**id** | **String** | External Channel ID provided at channel creation time | [optional] [readonly] 
**ingest** | [**PutChannelRequestIngest**](PutChannelRequestIngest.md) |  | 
**labels** | **[String]** | Optional labels for a channel. Any included labels must be at least 1 character long, but no greater than 256 characters. The maximum number of labels is 10. | [optional] 
**modified** | **Date** | Date and time the channel was last modified. | [optional] [readonly] 
**name** | **String** | A friendly human-readable name for the channel. This will get displayed in user interfaces. | [optional] 
**packaging** | [**ChannelPackaging**](ChannelPackaging.md) |  | [optional] 
**publishing** | [**ChannelPublishing**](ChannelPublishing.md) |  | [optional] 
**region** | **String** | Region represents the general geolocation for transcoding and stream egress from iStreamPlanet. If no region is provided at channel creation time, then &#39;US_WEST&#39; is used. | [optional] 
**resourceClass** | **String** | If the ResourceClass is unspecified the channel will default to run in the &#39;DYNAMIC&#39; ResourceClass. Note that changing the ResourceClass for a running channel is supported and will be performed with no downtime. | [optional] 
**self** | **String** | Self link for the channel. | [optional] [readonly] 
**signaling** | [**ChannelSignaling**](ChannelSignaling.md) |  | [optional] 
**tags** | [**ChannelTags**](ChannelTags.md) |  | [optional] 
**transcode** | [**ChannelTranscode**](ChannelTranscode.md) |  | [optional] 



## Enum: RegionEnum


* `WEST` (value: `"US_WEST"`)

* `EAST` (value: `"US_EAST"`)





## Enum: ResourceClassEnum


* `DYNAMIC` (value: `"DYNAMIC"`)

* `STATIC` (value: `"STATIC"`)




