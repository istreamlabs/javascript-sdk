# Isp.ChannelSignalingBlackoutSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultBlackoutSlateUrl** | **String** | Default slate URL to use for blackouts. Can be overridden by the &#39;slates&#39; field. | [optional] 
**forceBlackoutSegments** | **[String]** | List of signaling segment types to force blackout, e.g. add &#39;SPLICE_INSERT&#39; to blackout all ads signaled via SCTE-35 splice_insert. | [optional] 
**honorWebDeliveryRestriction** | **Boolean** | Determines whether to honor the web_delivery_allowed attribute in SCTE-35 segmentation descriptors. When this is enabled, a segmentation descriptor with web_delivery_allowed&#x3D;false will trigger a blackout. | [optional] 
**slates** | [**[ChannelSignalingBlackoutSettingsSlates]**](ChannelSignalingBlackoutSettingsSlates.md) | Per-segment type slate overrides. | [optional] 



## Enum: [ForceBlackoutSegmentsEnum]


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




