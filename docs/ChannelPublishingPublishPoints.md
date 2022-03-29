# IStreamPlanetChannelsApi.ChannelPublishingPublishPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http** | [**ChannelPublishingHttp**](ChannelPublishingHttp.md) |  | [optional] 
**id** | **String** | uniquely identifies this publish_point within a channel configuration. Can be referenced by other publish_points in the &#39;playlist_only_for&#39; field. | [optional] 
**playlistOnlyFor** | **String** | playlist_only_for identifies the id of the publish_point that has the segments for this publish_point, which is only publishing a playlist for those segments. All publish_points within a publication must either have &#39;playlist_only_for&#39; all set or all not set. | [optional] 


