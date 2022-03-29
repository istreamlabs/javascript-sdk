# IStreamPlanetChannelsApi.ChannelPublishingHls

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audioOnlyVariants** | **String** | Defines how audio only variant streams are included in the master playlist, where the variant streams are defined by #EXT-X-STREAM-INF tag, the tag attributes provide information about the Stream. If NOT_SET - honor the deprecated &#39;exclude_audio_only&#39; flag. Later when the deprecated flag is removed, the NOT_SET would mean INCLUDE_DEFAULT The INCLUDE_DEFAULT option - only the default &#39;audio only variant stream&#39; is included in master playlist. This is the most common use case. INCLUDE_NONE - no audio only variant streams are included in the master playlist, it replaces &#39;exclude_audio_only&#39; setting. INCLUDE_ALL - include all audio only variant streams in the master playlist. | [optional] 
**gapTags** | **String** | Allows turning gap tags ON/OFF. When turned ON - the tag &#39;#EXT-X-GAP&#39; is inserted into media playlist for a missing segment. When turned OFF - Discontinuity is inserted into the playlist for missing segment(s). The default option UNDEFINED is mapped to OFF. Note: Gap tags are always inserted for the missing thumbnail segments independently of this setting | [optional] 
**masterPublishFrequencySecs** | **Number** | How often the master playlist(s) should be published in seconds. A value of 0 means the master playlist will only be published once at channel start. | [optional] 
**masterUrlType** | **String** | Allows specifying url type for HLS master playlists. If not provided, playlist generation will use &#39;RELATIVE&#39;. | [optional] 
**mediaUrlType** | **String** | Allows specifying url type for HLS media playlists. If not provided, playlist generation will use &#39;RELATIVE&#39;. | [optional] 
**partialPresentations** | [**[ChannelPublishingHlsPartialPresentations]**](ChannelPublishingHlsPartialPresentations.md) | Specify which partial presentations should be used for this presentation. Partial presentations are additional master playlists that point to a subset of the parent presentation&#39;s media streams/variant playlists. | [optional] 
**pdtOnEverySecond** | **Boolean** | When true a #EXT-X-PROGRAM-DATE-TIME tag will be placed on every media segment in media playlists. When false, the default behavior, the PDT tag is set according to the HLS specification. | [optional] 
**signalingFormats** | **[String]** | Signaling formats specifies which SCTE-35 timeline marker formatting to use when rendering playlists. | [optional] 
**utcInSegmentTitle** | **Boolean** | Include a UTC timestamp (that is equivalent in value to #EXT-X-PROGRAM-DATE-TIME) in the title of each media segment in media playlists. Ex. #EXTINF:6.006,LTC&#x3D;2020-01-01T12:00:00.000Z | [optional] 



## Enum: AudioOnlyVariantsEnum


* `DEFAULT` (value: `"INCLUDE_DEFAULT"`)

* `NONE` (value: `"INCLUDE_NONE"`)

* `ALL` (value: `"INCLUDE_ALL"`)





## Enum: GapTagsEnum


* `ON` (value: `"ON"`)

* `OFF` (value: `"OFF"`)





## Enum: MasterUrlTypeEnum


* `RELATIVE` (value: `"RELATIVE"`)

* `ABSOLUTE` (value: `"ABSOLUTE"`)

* `HOST_RELATIVE` (value: `"HOST_RELATIVE"`)





## Enum: MediaUrlTypeEnum


* `RELATIVE` (value: `"RELATIVE"`)

* `ABSOLUTE` (value: `"ABSOLUTE"`)

* `HOST_RELATIVE` (value: `"HOST_RELATIVE"`)





## Enum: [SignalingFormatsEnum]


* `MDIALOG` (value: `"MDIALOG"`)

* `FREEWHEEL` (value: `"FREEWHEEL"`)

* `ADOBE_SIMPLE` (value: `"ADOBE_SIMPLE"`)

* `ADOBE_SCTE35` (value: `"ADOBE_SCTE35"`)

* `APPLE_SCTE35` (value: `"APPLE_SCTE35"`)

* `AD_SIMPLE` (value: `"AD_SIMPLE"`)

* `SCTE35` (value: `"SCTE35"`)

* `SCTE35_2019` (value: `"SCTE35_2019"`)

* `SCTE35_2019_EVERY_SEGMENT` (value: `"SCTE35_2019_EVERY_SEGMENT"`)




