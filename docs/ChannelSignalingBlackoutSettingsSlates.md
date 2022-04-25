# Isp.ChannelSignalingBlackoutSettingsSlates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blackoutSlateUrl** | **String** | Blackout slate URL to use for the specified segments. It must have one audio and one video stream. Either MPEG2 or H.264 can be used. | [optional] 
**segments** | **[String]** | Segment types that shall utilize the blackout slate URL. Any segment type defined here _must_ also be present in the parent signaling configuration. | [optional] 
**upids** | **[String]** | Exclusive list of hex string encoded colon separated UPID Type:ID pairs (e.g. &#39;0A:1A2B3C4D&#39;) to enable this blackout slate on. | [optional] 



## Enum: [SegmentsEnum]


* `SPLICE_INSERT` (value: `"SPLICE_INSERT"`)

* `CONTENT_ID` (value: `"CONTENT_ID"`)

* `PROGRAM` (value: `"PROGRAM"`)

* `PROGRAM_BLACKOUT_OVERRIDE` (value: `"PROGRAM_BLACKOUT_OVERRIDE"`)

* `PROGRAM_BREAKAWAY` (value: `"PROGRAM_BREAKAWAY"`)

* `CHAPTER` (value: `"CHAPTER"`)

* `BREAK` (value: `"BREAK"`)

* `OPENING_CREDIT` (value: `"OPENING_CREDIT"`)

* `CLOSING_CREDIT` (value: `"CLOSING_CREDIT"`)

* `PROVIDER_PLACEMENT_OP` (value: `"PROVIDER_PLACEMENT_OP"`)

* `DISTRIBUTOR_PLACEMENT_OP` (value: `"DISTRIBUTOR_PLACEMENT_OP"`)

* `PROVIDER_OVERLAY_OP` (value: `"PROVIDER_OVERLAY_OP"`)

* `DISTRIBUTOR_OVERLAY_OP` (value: `"DISTRIBUTOR_OVERLAY_OP"`)

* `PROVIDER_AD` (value: `"PROVIDER_AD"`)

* `DISTRIBUTOR_AD` (value: `"DISTRIBUTOR_AD"`)

* `UNSCHEDULED_EVENT` (value: `"UNSCHEDULED_EVENT"`)

* `NETWORK` (value: `"NETWORK"`)

* `SLATE` (value: `"SLATE"`)




