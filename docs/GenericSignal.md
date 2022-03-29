# IStreamPlanetChannelsApi.GenericSignal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **Number** | Splice duration (ms).  If no duration or a duration of 0 then the splice is indifinite. | [optional] [default to 0]
**eventId** | **Number** | Event ID | 
**segmentType** | **String** | Segment type | 
**signalType** | **String** | Signal type | 
**slateUri** | **String** | Slate url | [optional] 
**type** | **String** | Qualifier type | [optional] 
**upids** | **[String]** | UPIDs | [optional] 



## Enum: SegmentTypeEnum


* `splice_insert` (value: `"splice_insert"`)

* `content_id` (value: `"content_id"`)

* `program` (value: `"program"`)

* `program_breakaway` (value: `"program_breakaway"`)

* `chapter` (value: `"chapter"`)

* `break` (value: `"break"`)

* `opening_credit` (value: `"opening_credit"`)

* `closing_credit` (value: `"closing_credit"`)

* `provider_placement` (value: `"provider_placement"`)

* `distributor_placement` (value: `"distributor_placement"`)

* `provider_overlay` (value: `"provider_overlay"`)

* `distributor_overlay` (value: `"distributor_overlay"`)

* `provider_ad` (value: `"provider_ad"`)

* `distributor_ad` (value: `"distributor_ad"`)

* `unscheduled_event` (value: `"unscheduled_event"`)

* `network` (value: `"network"`)

* `slate` (value: `"slate"`)





## Enum: SignalTypeEnum


* `start` (value: `"start"`)

* `end` (value: `"end"`)

* `breakaway` (value: `"breakaway"`)

* `resumption` (value: `"resumption"`)





## Enum: TypeEnum


* `none` (value: `"none"`)

* `overlap` (value: `"overlap"`)

* `in_progress` (value: `"in_progress"`)




