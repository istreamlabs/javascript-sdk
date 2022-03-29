# IStreamPlanetChannelsApi.ChannelPublishingPublications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audioEncoderIds** | **[String]** | Optionally specify which audio encoders should be used for this publication. If none are specified, all audio encoders configured for the transcoder will be used. | [optional] 
**createVods** | **Boolean** | Create VODs for all publish points in this publication. Note that Live2VOD must also be configured for the parent |Channel|. | [optional] 
**dash** | [**ChannelPublishingDash**](ChannelPublishingDash.md) |  | [optional] 
**drms** | **[String]** | Optionally specify which DRMs to advertise in the playlist. If specified, this must be a subset of the DRMs specified by the packager associated with this publication. If omitted or empty, all DRMs specified by the packager will be advertised. This setting can only be used for HLS playlists. | [optional] 
**dvrWindowSecs** | **Number** | DVR window is the max sum(duration of media segments) that will be kept in a manifest at a given time in seconds. The max supported DVR window is 10 hours. | [optional] 
**hls** | [**ChannelPublishingHls**](ChannelPublishingHls.md) |  | [optional] 
**iframeOnlyEncoderIds** | **[String]** | List of video encoder IDs that should have I-Frame only playlists generated for them. | [optional] 
**masterPlaylistName** | **String** | Optional master manifest name. When not supplied a default of &#39;master&#39; will be used. | [optional] 
**packagerId** | **String** | Determines how segments in this publication are packaged. Must reference a packager in &#39;packaging.packagers&#39;. However, if this is a playlist-only publication (i.e. contains publish points that specify &#39;playlist_only_for&#39;), this must remain unset as the packager will be inferred from the publication this one is providing playlists for. | [optional] 
**publishPoints** | [**[ChannelPublishingPublishPoints]**](ChannelPublishingPublishPoints.md) | Publish points specify where to output. | [optional] 
**redundantPublishing** | **Boolean** | When redundant publishing is enabled succeeding to publish a given media segment to at least one HTTPPublishPoint in publish_points will result in that segment showing up in manifests as playable content. Will require at least two publish_points defined within the same publication. | [optional] 
**thumbnailEncoderIds** | **[String]** | Optional: Specify what thumbnail_encoders should be in this Publication | [optional] 
**useStrictBitrate** | **Boolean** | Optional, indicates whether we should pad the bitrate (false) or use what is explicitly provided (true) | [optional] 
**videoEncoderIds** | **[String]** | Optionally specify which video encoders should be used for this publication. If none are specified, all video encoders configured for the transcoder will be used. | [optional] 



## Enum: [DrmsEnum]


* `WIDEVINE` (value: `"WIDEVINE"`)

* `FAIRPLAY` (value: `"FAIRPLAY"`)

* `PRIMETIME` (value: `"PRIMETIME"`)

* `PLAYREADY` (value: `"PLAYREADY"`)




