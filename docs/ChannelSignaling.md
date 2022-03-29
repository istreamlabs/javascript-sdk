# IStreamPlanetChannelsApi.ChannelSignaling

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blackoutSettings** | [**ChannelSignalingBlackoutSettings**](ChannelSignalingBlackoutSettings.md) |  | [optional] 
**disableInbandParsing** | **Boolean** | Disable parsing SCTE-35 in-band signaling. Out-of-band signaling is still allowed. | [optional] 
**segmentSettings** | [**[ChannelSignalingSegmentSettings]**](ChannelSignalingSegmentSettings.md) | Settings that apply to specific segments. | [optional] 
**segments** | **[String]** | Segment types to process for in-band signaling. | [optional] 



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




