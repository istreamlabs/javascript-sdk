# Isp.ChannelPublishingDash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimumUpdatePeriodSecs** | **Number** | Sets the minimumUpdatePeriod field in MPD to be this value. If set to 0 (default), segment duration is used. The value shall not exceed the &#39;suggested_presentation_delay_secs&#39;. | [optional] 
**signalingFormats** | **[String]** | Signaling formats specifies which SCTE-35 timeline marker formatting to use when rendering playlists. | [optional] 
**suggestedPresentationDelaySecs** | **Number** | The suggested amount of time (in seconds) the player should be behind the live stream. This value must be greater or equal to &#39;minimum_update_period_secs&#39;. | [optional] 
**urlType** | **String** | If set to &#39;URL_TYPE_UNDEFINED&#39; playlist generation will use &#39;RELATIVE&#39;. | [optional] 



## Enum: [SignalingFormatsEnum]


* `BIN_DFP` (value: `"SCTE35_BIN_DFP"`)

* `SPLICE_INFO_SECTION` (value: `"SCTE35_SPLICE_INFO_SECTION"`)

* `BIN` (value: `"SCTE35_BIN"`)

* `SPLICE_INFO_SECTION_WITH_PRESENTATION_TIME` (value: `"SCTE35_SPLICE_INFO_SECTION_WITH_PRESENTATION_TIME"`)

* `BIN_WITH_PRESENTATION_TIME` (value: `"SCTE35_BIN_WITH_PRESENTATION_TIME"`)





## Enum: UrlTypeEnum


* `RELATIVE` (value: `"RELATIVE"`)

* `ABSOLUTE` (value: `"ABSOLUTE"`)

* `HOST_RELATIVE` (value: `"HOST_RELATIVE"`)




