# Isp.ChannelPackagingContentProtectionAtlas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetId** | **String** | The Asset Identifier which was taken from the token entitlement service request. | [optional] 
**companyId** | **String** | The Identifier of the Company that this token belongs. | [optional] 
**drms** | **[String]** | DRM system keys to request | [optional] 
**widevineV0PsshBox** | **Boolean** | When TRUE the KeyID is not embedded in the pssh box which sets the version to 0. Defaults to generating v1 pssh_boxes that includes the key_id | [optional] 



## Enum: [DrmsEnum]


* `WIDEVINE` (value: `"WIDEVINE"`)

* `FAIRPLAY` (value: `"FAIRPLAY"`)

* `PRIMETIME` (value: `"PRIMETIME"`)

* `PLAYREADY` (value: `"PLAYREADY"`)




