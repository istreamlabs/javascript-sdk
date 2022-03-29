# IStreamPlanetChannelsApi.ChannelTranscodeSegmenter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gopDurationSecs** | **Number** | GOP (group of pictures) duration specifies the amount of time between I-frames. Shorter durations can lower quality slightly as each I-frame uses more bits than P- &amp; B-frames but can provide a better seeking experience when enabling thumbnail encoders and/or I-Frame Only playlists. | [optional] 
**partialsMode** | **String** | Not public because we haven&#39;t shipped low latency HLS yet and we probably need to update the naming. | [optional] 
**segmentDurationSecs** | **Number** | Segment duration specifies the target duration of a single segment. Segments shorter than this duration can occur at signaling boundaries. This value _must_ be a multiple of the GOP duration value. | [optional] 
**temi** | **Boolean** | Include TEMI (Timeline and External Media Information ISO/IEC 13818-1:2019 Annex U) to mpeg-ts segments. | [optional] 



## Enum: PartialsModeEnum


* `GOP` (value: `"GOP"`)




