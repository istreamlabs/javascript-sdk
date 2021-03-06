/**
 * iStreamPlanet Channels API
 * This API provides a way to list, create, and run channels.  Channels consist of inputs (ingest), transcoding settings like codecs and bitrates, and outputs (publishing).  List calls use cursor-based pagination with [RFC 5988](https://tools.ietf.org/html/rfc5988) Link headers. Clients *should* read this header and follow the next link to read all pages of results. 
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: support@istreamplanet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Channel from './model/Channel';
import ChannelIngest from './model/ChannelIngest';
import ChannelIngestSlate from './model/ChannelIngestSlate';
import ChannelIngestSource from './model/ChannelIngestSource';
import ChannelIngestSourceAudioSources from './model/ChannelIngestSourceAudioSources';
import ChannelPackaging from './model/ChannelPackaging';
import ChannelPackagingContentProtection from './model/ChannelPackagingContentProtection';
import ChannelPackagingContentProtectionAtlas from './model/ChannelPackagingContentProtectionAtlas';
import ChannelPackagingContentProtectionBulkFile from './model/ChannelPackagingContentProtectionBulkFile';
import ChannelPackagingContentProtectionCommon from './model/ChannelPackagingContentProtectionCommon';
import ChannelPackagingContentProtectionCpix from './model/ChannelPackagingContentProtectionCpix';
import ChannelPackagingContentProtectionKeyRotation from './model/ChannelPackagingContentProtectionKeyRotation';
import ChannelPackagingContentProtectionSimple from './model/ChannelPackagingContentProtectionSimple';
import ChannelPackagingContentProtectionSimpleBasicAuth from './model/ChannelPackagingContentProtectionSimpleBasicAuth';
import ChannelPackagingContentProtectionSimplePublishPoints from './model/ChannelPackagingContentProtectionSimplePublishPoints';
import ChannelPackagingMp2t from './model/ChannelPackagingMp2t';
import ChannelPackagingMp4 from './model/ChannelPackagingMp4';
import ChannelPackagingPackagers from './model/ChannelPackagingPackagers';
import ChannelPlayback from './model/ChannelPlayback';
import ChannelPlaybackCmaf from './model/ChannelPlaybackCmaf';
import ChannelPlaybackContentProtection from './model/ChannelPlaybackContentProtection';
import ChannelPublishing from './model/ChannelPublishing';
import ChannelPublishingClosedCaptionStreams from './model/ChannelPublishingClosedCaptionStreams';
import ChannelPublishingDash from './model/ChannelPublishingDash';
import ChannelPublishingHls from './model/ChannelPublishingHls';
import ChannelPublishingHlsPartialPresentations from './model/ChannelPublishingHlsPartialPresentations';
import ChannelPublishingHttp from './model/ChannelPublishingHttp';
import ChannelPublishingLive2vod from './model/ChannelPublishingLive2vod';
import ChannelPublishingPublications from './model/ChannelPublishingPublications';
import ChannelPublishingPublishPoints from './model/ChannelPublishingPublishPoints';
import ChannelSignaling from './model/ChannelSignaling';
import ChannelSignalingBlackoutSettings from './model/ChannelSignalingBlackoutSettings';
import ChannelSignalingBlackoutSettingsSlates from './model/ChannelSignalingBlackoutSettingsSlates';
import ChannelSignalingSegmentSettings from './model/ChannelSignalingSegmentSettings';
import ChannelSignalingTierFilter from './model/ChannelSignalingTierFilter';
import ChannelSignalingTierFilterExplicitTier from './model/ChannelSignalingTierFilterExplicitTier';
import ChannelTags from './model/ChannelTags';
import ChannelTimelineEntry from './model/ChannelTimelineEntry';
import ChannelTranscode from './model/ChannelTranscode';
import ChannelTranscodeAudioEncoders from './model/ChannelTranscodeAudioEncoders';
import ChannelTranscodeH264 from './model/ChannelTranscodeH264';
import ChannelTranscodeH265 from './model/ChannelTranscodeH265';
import ChannelTranscodeLoudness from './model/ChannelTranscodeLoudness';
import ChannelTranscodeSegmenter from './model/ChannelTranscodeSegmenter';
import ChannelTranscodeThumbnailEncoders from './model/ChannelTranscodeThumbnailEncoders';
import ChannelTranscodeVideoEncoders from './model/ChannelTranscodeVideoEncoders';
import ErrorModel from './model/ErrorModel';
import ErrorModelErrors from './model/ErrorModelErrors';
import GenericSignal from './model/GenericSignal';
import InsertMetadataRequest from './model/InsertMetadataRequest';
import InsertMetadataResult from './model/InsertMetadataResult';
import ProgramSignal from './model/ProgramSignal';
import PutChannelRequest from './model/PutChannelRequest';
import PutChannelRequestIngest from './model/PutChannelRequestIngest';
import PutChannelRequestIngestSource from './model/PutChannelRequestIngestSource';
import Scte35 from './model/Scte35';
import Segment from './model/Segment';
import Slate from './model/Slate';
import Source from './model/Source';
import SpliceInsertEndSignal from './model/SpliceInsertEndSignal';
import SpliceInsertStartSignal from './model/SpliceInsertStartSignal';
import Summary from './model/Summary';
import Summary2 from './model/Summary2';
import Summary2Source from './model/Summary2Source';
import AuditOperationsApi from './api/AuditOperationsApi';
import ChannelOperationsApi from './api/ChannelOperationsApi';
import ChannelsApi from './api/ChannelsApi';
import SourcesApi from './api/SourcesApi';


/**
* This_API_provides_a_way_to_list_create_and_run_channels_Channels_consist_of_inputs__ingest_transcoding_settings_like_codecs_and_bitrates_and_outputs__publishing_List_calls_use_cursor_based_pagination_with__RFC_5988_https__tools_ietf_org_html_rfc5988_Link_headers__Clients_should_read_this_header_and_follow_the_next_link_to_read_all_pages_of_results_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Isp = require('index'); // See note below*.
* var xxxSvc = new Isp.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Isp.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Isp.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Isp.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel,

    /**
     * The ChannelIngest model constructor.
     * @property {module:model/ChannelIngest}
     */
    ChannelIngest,

    /**
     * The ChannelIngestSlate model constructor.
     * @property {module:model/ChannelIngestSlate}
     */
    ChannelIngestSlate,

    /**
     * The ChannelIngestSource model constructor.
     * @property {module:model/ChannelIngestSource}
     */
    ChannelIngestSource,

    /**
     * The ChannelIngestSourceAudioSources model constructor.
     * @property {module:model/ChannelIngestSourceAudioSources}
     */
    ChannelIngestSourceAudioSources,

    /**
     * The ChannelPackaging model constructor.
     * @property {module:model/ChannelPackaging}
     */
    ChannelPackaging,

    /**
     * The ChannelPackagingContentProtection model constructor.
     * @property {module:model/ChannelPackagingContentProtection}
     */
    ChannelPackagingContentProtection,

    /**
     * The ChannelPackagingContentProtectionAtlas model constructor.
     * @property {module:model/ChannelPackagingContentProtectionAtlas}
     */
    ChannelPackagingContentProtectionAtlas,

    /**
     * The ChannelPackagingContentProtectionBulkFile model constructor.
     * @property {module:model/ChannelPackagingContentProtectionBulkFile}
     */
    ChannelPackagingContentProtectionBulkFile,

    /**
     * The ChannelPackagingContentProtectionCommon model constructor.
     * @property {module:model/ChannelPackagingContentProtectionCommon}
     */
    ChannelPackagingContentProtectionCommon,

    /**
     * The ChannelPackagingContentProtectionCpix model constructor.
     * @property {module:model/ChannelPackagingContentProtectionCpix}
     */
    ChannelPackagingContentProtectionCpix,

    /**
     * The ChannelPackagingContentProtectionKeyRotation model constructor.
     * @property {module:model/ChannelPackagingContentProtectionKeyRotation}
     */
    ChannelPackagingContentProtectionKeyRotation,

    /**
     * The ChannelPackagingContentProtectionSimple model constructor.
     * @property {module:model/ChannelPackagingContentProtectionSimple}
     */
    ChannelPackagingContentProtectionSimple,

    /**
     * The ChannelPackagingContentProtectionSimpleBasicAuth model constructor.
     * @property {module:model/ChannelPackagingContentProtectionSimpleBasicAuth}
     */
    ChannelPackagingContentProtectionSimpleBasicAuth,

    /**
     * The ChannelPackagingContentProtectionSimplePublishPoints model constructor.
     * @property {module:model/ChannelPackagingContentProtectionSimplePublishPoints}
     */
    ChannelPackagingContentProtectionSimplePublishPoints,

    /**
     * The ChannelPackagingMp2t model constructor.
     * @property {module:model/ChannelPackagingMp2t}
     */
    ChannelPackagingMp2t,

    /**
     * The ChannelPackagingMp4 model constructor.
     * @property {module:model/ChannelPackagingMp4}
     */
    ChannelPackagingMp4,

    /**
     * The ChannelPackagingPackagers model constructor.
     * @property {module:model/ChannelPackagingPackagers}
     */
    ChannelPackagingPackagers,

    /**
     * The ChannelPlayback model constructor.
     * @property {module:model/ChannelPlayback}
     */
    ChannelPlayback,

    /**
     * The ChannelPlaybackCmaf model constructor.
     * @property {module:model/ChannelPlaybackCmaf}
     */
    ChannelPlaybackCmaf,

    /**
     * The ChannelPlaybackContentProtection model constructor.
     * @property {module:model/ChannelPlaybackContentProtection}
     */
    ChannelPlaybackContentProtection,

    /**
     * The ChannelPublishing model constructor.
     * @property {module:model/ChannelPublishing}
     */
    ChannelPublishing,

    /**
     * The ChannelPublishingClosedCaptionStreams model constructor.
     * @property {module:model/ChannelPublishingClosedCaptionStreams}
     */
    ChannelPublishingClosedCaptionStreams,

    /**
     * The ChannelPublishingDash model constructor.
     * @property {module:model/ChannelPublishingDash}
     */
    ChannelPublishingDash,

    /**
     * The ChannelPublishingHls model constructor.
     * @property {module:model/ChannelPublishingHls}
     */
    ChannelPublishingHls,

    /**
     * The ChannelPublishingHlsPartialPresentations model constructor.
     * @property {module:model/ChannelPublishingHlsPartialPresentations}
     */
    ChannelPublishingHlsPartialPresentations,

    /**
     * The ChannelPublishingHttp model constructor.
     * @property {module:model/ChannelPublishingHttp}
     */
    ChannelPublishingHttp,

    /**
     * The ChannelPublishingLive2vod model constructor.
     * @property {module:model/ChannelPublishingLive2vod}
     */
    ChannelPublishingLive2vod,

    /**
     * The ChannelPublishingPublications model constructor.
     * @property {module:model/ChannelPublishingPublications}
     */
    ChannelPublishingPublications,

    /**
     * The ChannelPublishingPublishPoints model constructor.
     * @property {module:model/ChannelPublishingPublishPoints}
     */
    ChannelPublishingPublishPoints,

    /**
     * The ChannelSignaling model constructor.
     * @property {module:model/ChannelSignaling}
     */
    ChannelSignaling,

    /**
     * The ChannelSignalingBlackoutSettings model constructor.
     * @property {module:model/ChannelSignalingBlackoutSettings}
     */
    ChannelSignalingBlackoutSettings,

    /**
     * The ChannelSignalingBlackoutSettingsSlates model constructor.
     * @property {module:model/ChannelSignalingBlackoutSettingsSlates}
     */
    ChannelSignalingBlackoutSettingsSlates,

    /**
     * The ChannelSignalingSegmentSettings model constructor.
     * @property {module:model/ChannelSignalingSegmentSettings}
     */
    ChannelSignalingSegmentSettings,

    /**
     * The ChannelSignalingTierFilter model constructor.
     * @property {module:model/ChannelSignalingTierFilter}
     */
    ChannelSignalingTierFilter,

    /**
     * The ChannelSignalingTierFilterExplicitTier model constructor.
     * @property {module:model/ChannelSignalingTierFilterExplicitTier}
     */
    ChannelSignalingTierFilterExplicitTier,

    /**
     * The ChannelTags model constructor.
     * @property {module:model/ChannelTags}
     */
    ChannelTags,

    /**
     * The ChannelTimelineEntry model constructor.
     * @property {module:model/ChannelTimelineEntry}
     */
    ChannelTimelineEntry,

    /**
     * The ChannelTranscode model constructor.
     * @property {module:model/ChannelTranscode}
     */
    ChannelTranscode,

    /**
     * The ChannelTranscodeAudioEncoders model constructor.
     * @property {module:model/ChannelTranscodeAudioEncoders}
     */
    ChannelTranscodeAudioEncoders,

    /**
     * The ChannelTranscodeH264 model constructor.
     * @property {module:model/ChannelTranscodeH264}
     */
    ChannelTranscodeH264,

    /**
     * The ChannelTranscodeH265 model constructor.
     * @property {module:model/ChannelTranscodeH265}
     */
    ChannelTranscodeH265,

    /**
     * The ChannelTranscodeLoudness model constructor.
     * @property {module:model/ChannelTranscodeLoudness}
     */
    ChannelTranscodeLoudness,

    /**
     * The ChannelTranscodeSegmenter model constructor.
     * @property {module:model/ChannelTranscodeSegmenter}
     */
    ChannelTranscodeSegmenter,

    /**
     * The ChannelTranscodeThumbnailEncoders model constructor.
     * @property {module:model/ChannelTranscodeThumbnailEncoders}
     */
    ChannelTranscodeThumbnailEncoders,

    /**
     * The ChannelTranscodeVideoEncoders model constructor.
     * @property {module:model/ChannelTranscodeVideoEncoders}
     */
    ChannelTranscodeVideoEncoders,

    /**
     * The ErrorModel model constructor.
     * @property {module:model/ErrorModel}
     */
    ErrorModel,

    /**
     * The ErrorModelErrors model constructor.
     * @property {module:model/ErrorModelErrors}
     */
    ErrorModelErrors,

    /**
     * The GenericSignal model constructor.
     * @property {module:model/GenericSignal}
     */
    GenericSignal,

    /**
     * The InsertMetadataRequest model constructor.
     * @property {module:model/InsertMetadataRequest}
     */
    InsertMetadataRequest,

    /**
     * The InsertMetadataResult model constructor.
     * @property {module:model/InsertMetadataResult}
     */
    InsertMetadataResult,

    /**
     * The ProgramSignal model constructor.
     * @property {module:model/ProgramSignal}
     */
    ProgramSignal,

    /**
     * The PutChannelRequest model constructor.
     * @property {module:model/PutChannelRequest}
     */
    PutChannelRequest,

    /**
     * The PutChannelRequestIngest model constructor.
     * @property {module:model/PutChannelRequestIngest}
     */
    PutChannelRequestIngest,

    /**
     * The PutChannelRequestIngestSource model constructor.
     * @property {module:model/PutChannelRequestIngestSource}
     */
    PutChannelRequestIngestSource,

    /**
     * The Scte35 model constructor.
     * @property {module:model/Scte35}
     */
    Scte35,

    /**
     * The Segment model constructor.
     * @property {module:model/Segment}
     */
    Segment,

    /**
     * The Slate model constructor.
     * @property {module:model/Slate}
     */
    Slate,

    /**
     * The Source model constructor.
     * @property {module:model/Source}
     */
    Source,

    /**
     * The SpliceInsertEndSignal model constructor.
     * @property {module:model/SpliceInsertEndSignal}
     */
    SpliceInsertEndSignal,

    /**
     * The SpliceInsertStartSignal model constructor.
     * @property {module:model/SpliceInsertStartSignal}
     */
    SpliceInsertStartSignal,

    /**
     * The Summary model constructor.
     * @property {module:model/Summary}
     */
    Summary,

    /**
     * The Summary2 model constructor.
     * @property {module:model/Summary2}
     */
    Summary2,

    /**
     * The Summary2Source model constructor.
     * @property {module:model/Summary2Source}
     */
    Summary2Source,

    /**
    * The AuditOperationsApi service constructor.
    * @property {module:api/AuditOperationsApi}
    */
    AuditOperationsApi,

    /**
    * The ChannelOperationsApi service constructor.
    * @property {module:api/ChannelOperationsApi}
    */
    ChannelOperationsApi,

    /**
    * The ChannelsApi service constructor.
    * @property {module:api/ChannelsApi}
    */
    ChannelsApi,

    /**
    * The SourcesApi service constructor.
    * @property {module:api/SourcesApi}
    */
    SourcesApi
};
