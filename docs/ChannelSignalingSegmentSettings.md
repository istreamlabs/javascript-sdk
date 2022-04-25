# Isp.ChannelSignalingSegmentSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultDurationSecs** | **Number** | Specifies the duration of a segment when the in-band SCTE-35 that initiates it (e.g. Distributor Placement Opportunity Start) is missing an explicit duration. N.B. for program and ad types, this also affects &#39;Simple Program&#39; and &#39;Simple Ad&#39; markers, respectively. | [optional] 
**emitDefaultDuration** | **Boolean** | Determines whether to include the default duration in the output SCTE-35 messages when the input SCTE-35 message did not specify a duration. | [optional] 
**offsetMillis** | **Number** | Specifies a &#39;correction&#39; to the splice_time of in-band SCTE-35 in milliseconds. | [optional] 
**segmentEndMode** | **String** | Determines which Segment End signaling mode to use for the provided segments. If unspecified, defaults to MATCH_END_EVENT_ID. | [optional] 
**segments** | **[String]** | Specifies the list of which segment types this setting applies to. Any segment type defined here _must_ also be present in the parent signaling configuration. | [optional] 
**tierFilter** | [**ChannelSignalingTierFilter**](ChannelSignalingTierFilter.md) |  | [optional] 



## Enum: SegmentEndModeEnum


* `MATCH_END_EVENT_ID` (value: `"MATCH_END_EVENT_ID"`)

* `IGNORE_END_EVENT_ID` (value: `"IGNORE_END_EVENT_ID"`)

* `IGNORE_END_SIGNAL` (value: `"IGNORE_END_SIGNAL"`)





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




