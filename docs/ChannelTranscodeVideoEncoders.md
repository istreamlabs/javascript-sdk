# IStreamPlanetChannelsApi.ChannelTranscodeVideoEncoders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitRate** | **Number** | Bit rate specifies the number in bits used per second. Higher values result in better video quality but bigger file sizes. For H.264 this value is the target of the constrained variable bit rate. | [optional] 
**frameRate** | **String** | Frame rate specifies the number of images that are shown per second when playing back the video. For the best quality playback, this should match or be a multiple of the input source video stream. | [optional] 
**h264** | [**ChannelTranscodeH264**](ChannelTranscodeH264.md) |  | [optional] 
**h265** | [**ChannelTranscodeH265**](ChannelTranscodeH265.md) |  | [optional] 
**height** | **Number** | Height specifies the video height in pixels. Must be a multiple of two. | [optional] 
**id** | **String** | Encoder ID. IDs must be unique for all video and thumbnail encoders. This ID is referenced when setting up playlist publishing. | [optional] 
**width** | **Number** | Width specifies the video width in pixels. Must be a multiple of two. | [optional] 



## Enum: FrameRateEnum


* `23_98` (value: `"FR_23_98"`)

* `24` (value: `"FR_24"`)

* `25` (value: `"FR_25"`)

* `29_97` (value: `"FR_29_97"`)

* `30` (value: `"FR_30"`)

* `50` (value: `"FR_50"`)

* `59_94` (value: `"FR_59_94"`)

* `60` (value: `"FR_60"`)




