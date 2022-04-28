# Isp.ChannelPackagingContentProtectionKeyRotation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intervalSecs** | **Number** | Rotate keys based on the specified time interval. If Program is also provided then this time interval will only apply to media segments that are outside of program boundaries. If Program is NOT provided then only this time interval will be used to decided when to rotate keys. | [optional] 
**program** | **Boolean** | Rotate keys on (SCTE35) program boundaries such that no two programs will be protected with the same key. | [optional] 
**programOverlapSkipEncrypt** | **Boolean** | Do not encrypt segments that are part of more than one SCTE-35 program. | [optional] 


