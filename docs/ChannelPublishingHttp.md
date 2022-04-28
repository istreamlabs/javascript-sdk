# Isp.ChannelPublishingHttp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basicAuth** | [**ChannelPackagingContentProtectionSimpleBasicAuth**](ChannelPackagingContentProtectionSimpleBasicAuth.md) |  | [optional] 
**compression** | **String** | Configures whether or not (and how) to compress manifests being published to the origin. If not specified, manifests will not be compressed. | [optional] 
**crossPlaybackPaths** | **[String]** | Cross Playback Paths are playback paths that reference alternative content. These playback paths could reference publish points from the same publication or a completely different encoder and packager altogether. Content published to an endpoint referenced by one of these cross playback paths MUST be of the same Manifest.Type. | [optional] 
**doNotMonitor** | **Boolean** | (Optional) Specifies if this pubpoint should not be monitored by PLM. | [optional] 
**headers** | **{String: String}** | Allows custom HTTP headers to be set via configuration for all HTTP requests. | [optional] 
**method** | **String** | Method overrides what HTTP method to specify in requests to the Publish Point. If not specified the service will default to POST. | [optional] 
**playbackBaseUrl** | **String** | The base URL where published playlists will be able to be obtained. This is often different than the publish_base_url for CDN publishing workflows. | [optional] 
**playbackQueryParams** | **String** | Specifies any query parameters that will be added to playback urls. Should not include the initial &#39;?&#39; Example: &#39;foo&#x3D;bar&amp;q&#x3D;golang&#39; | [optional] 
**publishBaseUrl** | **String** | The base URL where generated playlists will be sent/published. Each publish point requires a unique &#39;publish_base_url&#39;. | [optional] 



## Enum: CompressionEnum


* `NONE` (value: `"NONE"`)

* `GZIP` (value: `"GZIP"`)




