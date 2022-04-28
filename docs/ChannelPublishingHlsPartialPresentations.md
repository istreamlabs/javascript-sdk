# Isp.ChannelPublishingHlsPartialPresentations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audioEncoderIds** | **[String]** | Specify which audio encoders should be used for this presentation. If none are specified, all audio encoders configured for the parent Publication will be used. | [optional] 
**iframeOnlyEncoderIds** | **[String]** | List of video encoder IDs that should have I-Frame only playlists generated for them. | [optional] 
**playlistPath** | **String** | Sub-path that will be appended onto the publish and playback base URLs of HTTP PublishPoints for published playlist files. | [optional] 
**thumbnailEncoderIds** | **[String]** | Specify which thumbnail encoders should be used for this presentation. If none are specified, all thumbnail encoders configured for the parent Publication will be used. | [optional] 
**videoEncoderIds** | **[String]** | Specify which video encoders should be used for this presentation. If none are specified, all video encoders configured for the parent Publication will be used. | [optional] 


