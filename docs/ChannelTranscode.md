# Isp.ChannelTranscode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audioEncoders** | [**[ChannelTranscodeAudioEncoders]**](ChannelTranscodeAudioEncoders.md) | Audio encoders specify audio conversion settings, e.g. channels, samples, codec, bitrate, etc. | [optional] 
**featureFlags** | **[String]** | Feature flag strings enable experimental transcode features or functionality that are not yet or never will be promoted to the channeldoc model proper. | [optional] 
**id3Mode** | **String** | Specify how to process ID3 tags from the input source. If not specified, ID3 tags in the source will be ignored. | [optional] 
**resizeMode** | **String** | Resize mode specifies how to scale a video up or down to match the output dimensions. | [optional] 
**segmenter** | [**ChannelTranscodeSegmenter**](ChannelTranscodeSegmenter.md) |  | [optional] 
**thumbnailEncoders** | [**[ChannelTranscodeThumbnailEncoders]**](ChannelTranscodeThumbnailEncoders.md) | Thumbnail encoders specify how to create image snapshots of the video stream. | [optional] 
**videoEncoders** | [**[ChannelTranscodeVideoEncoders]**](ChannelTranscodeVideoEncoders.md) | Video encoders specify video conversion settings, e.g. dimensions, codec, bitrate, etc. | [optional] 



## Enum: Id3ModeEnum


* `PASSTHROUGH` (value: `"PASSTHROUGH"`)





## Enum: ResizeModeEnum


* `STRETCH` (value: `"STRETCH"`)

* `LETTERBOX` (value: `"LETTERBOX"`)




