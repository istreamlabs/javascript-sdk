# Isp.ChannelPackagingContentProtectionCpix

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificatesId** | **String** | Unique ID used for certificate settings, unique per distributor. | [optional] 
**contentId** | **String** | (Optional) Content ID that identifies this channel in the CPIX service. Value is defined by the DRM system owner, and if defined will be included as part of a POST request. | [optional] 
**credentialsId** | **String** | Unique ID used for credentials settings, unique per distributor. | [optional] 
**decryptionKeyId** | **String** | Unique ID of the decryption key to use in case the server response contains content keys encrypted. The key is unique per distirutor, and configured ahead of time by the publishing team and the CPIX service owner. | [optional] 
**drms** | **[String]** | (Optional) DRM system keys to request. If not defined a GET request will be done, and any key returned will be handled. If defined, random kid(s) (key ids) will be generated on rotation for each DRM system, and a POST request will be done to create them. | [optional] 
**headersId** | **String** | (Optional) An identifier to a list of HTTP headers to be added to the request sent to the CPIX service. | [optional] 
**uri** | **String** | CPIX service URI | [optional] 



## Enum: [DrmsEnum]


* `WIDEVINE` (value: `"WIDEVINE"`)

* `FAIRPLAY` (value: `"FAIRPLAY"`)

* `PRIMETIME` (value: `"PRIMETIME"`)

* `PLAYREADY` (value: `"PLAYREADY"`)




