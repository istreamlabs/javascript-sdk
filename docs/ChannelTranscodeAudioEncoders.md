# Isp.ChannelTranscodeAudioEncoders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audioSourceId** | **String** | Audio source ID specifies which stream within the audio source to use. | [optional] 
**bitRate** | **Number** | Bit rate specifies the constant number of bits used per second. Higher values result in better audio quality but bigger file sizes. | [optional] 
**channels** | **Number** | Channels specifies the number of audio channels to encode. The available options depend on the audio codec. The encoder supports different channel configurations based on the codec; AAC 1-2 channels, AC3 supports 1-6, and EAC3 supports 1-8. For example, for AC3 5.1 one would set 6 channels. Channel configurations are as follows: 1 - Mono / Dolby 1.0 (C), 2 - Stereo / Dolby 2.0 (L, R), 3 - Dolby 3.0 (L, C, R), 4 - Dolby 4.0 (L, C, R, l), 5 - Dolby 5.0 (L, C, R, l, r), 6 - Dolby 5.1 (L, C, R, l, r, LFE), 7 - Dolby 7.0 (L, C, R, l, r, Lrs, Rrs), 8 - Dolby 7.1 (L, C, R, l, r, Lrs, Rrs, LFE). | [optional] 
**codec** | **String** | Codec specifies the audio data encoding format. | [optional] 
**id** | **String** | Encoder ID. IDs must be unique for all audio encoders. This ID is referenced when setting up playlist publishing. | [optional] 
**loudness** | [**ChannelTranscodeLoudness**](ChannelTranscodeLoudness.md) |  | [optional] 
**sampleRate** | **Number** | Sample rate specifies the number of audio samples in hertz. The available options depend on the audio codec: AAC supports 8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 64000, 88200, and 96000. AC3/EAC3 support only 48000. | [optional] 



## Enum: CodecEnum


* `AAC_LC` (value: `"AAC_LC"`)

* `AC3` (value: `"AC3"`)

* `EAC3` (value: `"EAC3"`)




