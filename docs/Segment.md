# Isp.Segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **Date** | The program time when the segment ends (or ended). | [optional] 
**eventId** | **Number** | The event_id used in the Signal START that resulted in this signaling segment. | [optional] 
**segmentId** | **Number** | Uniquely identifies the signaling segment for a channel. This is assigned by the transcoder when the segment is created. | [optional] 
**slateUrl** | **String** | When set, contains the URL to the slate media asset that will play for the duration of the segment. | [optional] 
**start** | **Date** | The program time when the segment starts (or started). | [optional] 
**type** | **String** |  | [optional] 



## Enum: TypeEnum


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




