export class CampaignConstants{
    //START CAMPAIGN
    private static _LABEL_CAMPAIGN_NAME: string = "Campaign Name";
    private static _LABEL_CAMPAIGN_STATUS: string = "Campaign Status";
    private static _LABEL_TYPE_OF_CALL: string = "Type Of Call";
    private static _LABEL_CALL_DIRECTION: string = "Call Direction";
    private static _LABEL_IS_ENABLED_FOR_POPUP: string = "Is Enabled For Popup";
    private static _LABEL_IS_DEFAULT: string = "Is Default";

    //CAMPAING INCOMING
    private static _LABEL_DID_NUMBER: string = "Did Number";
    private static _LABEL_QUEUE_NAMES: string = "Queue Names";
    private static _LABEL_CTI_POSTBACK_URL: string = "CTI Postback URL";

    //CAMPAIGN OUTGOING
    private static _LABEL_IS_EXTENSION_WISE: string = "Is Extension wise";
    private static _LABEL_NO_OF_CLIENT_TRIES: string = "No of client tries";
    private static _LABEL_NO_OF_AGENT_TRIES: string = "No of agent tries";
    private static _LABEL_RETRY_AFTER: string = "Retry after";
    private static _LABEL_TRUNK_NAME: string = "Trunk name";
    private static _LABEL_PREFIX: string = "Prefix";
    private static _LABEL_DIAL_OUT_WAIT_TIME_IN_SECS: string = "Dial out wait time in secs";

    //CAMPAIGN POPUP
    private static _LABEL_MODULE_NAME: string = "Module name";
    private static _LABEL_DIRECTORY_INFO_URL: string = "Directory Info URL";
    private static _LABEL_WRAP_UP_TIME_IN_SECS: string = "Wrap up time in Secs";
    private static _LABEL_CAMPAIGN_FEED_SOURCE: string = "Campaign Feed Source";
    
    public static get LABEL_CAMPAIGN_NAME(): string {
        return CampaignConstants._LABEL_CAMPAIGN_NAME;
    }

    public static set LABEL_CAMPAIGN_NAME(value: string) {
        CampaignConstants._LABEL_CAMPAIGN_NAME = value;
    }

    public static get LABEL_CAMPAIGN_STATUS(): string {
        return CampaignConstants._LABEL_CAMPAIGN_STATUS;
    }
    public static set LABEL_CAMPAIGN_STATUS(value: string) {
        CampaignConstants._LABEL_CAMPAIGN_STATUS = value;
    }

    public static get LABEL_TYPE_OF_CALL(): string {
        return CampaignConstants._LABEL_TYPE_OF_CALL;
    }
    public static set LABEL_TYPE_OF_CALL(value: string) {
        CampaignConstants._LABEL_TYPE_OF_CALL = value;
    }

    public static get LABEL_CALL_DIRECTION(): string {
        return CampaignConstants._LABEL_CALL_DIRECTION;
    }
    public static set LABEL_CALL_DIRECTION(value: string) {
        CampaignConstants._LABEL_CALL_DIRECTION = value;
    }

    public static get LABEL_IS_ENABLED_FOR_POPUP(): string {
        return CampaignConstants._LABEL_IS_ENABLED_FOR_POPUP;
    }
    public static set LABEL_IS_ENABLED_FOR_POPUP(value: string) {
        CampaignConstants._LABEL_IS_ENABLED_FOR_POPUP = value;
    }

    public static get LABEL_IS_DEFAULT(): string {
        return CampaignConstants._LABEL_IS_DEFAULT;
    }
    public static set LABEL_IS_DEFAULT(value: string) {
        CampaignConstants._LABEL_IS_DEFAULT = value;
    }

    public static get LABEL_DID_NUMBER(): string {
        return CampaignConstants._LABEL_DID_NUMBER;
    }
    public static set LABEL_DID_NUMBER 
        (value: string) {
        CampaignConstants._LABEL_DID_NUMBER = value;
    }

    public static get LABEL_QUEUE_NAMES(): string {
        return CampaignConstants._LABEL_QUEUE_NAMES;
    }
    public static set LABEL_QUEUE_NAMES 
        (value: string) {
        CampaignConstants._LABEL_QUEUE_NAMES = value;
    }

    public static get LABEL_CTI_POSTBACK_URL(): string {
        return CampaignConstants._LABEL_CTI_POSTBACK_URL;
    }
    public static set LABEL_CTI_POSTBACK_URL(value: string) {
        CampaignConstants._LABEL_CTI_POSTBACK_URL = value;
    }

    public static get LABEL_NO_OF_CLIENT_TRIES(): string {
        return CampaignConstants._LABEL_NO_OF_CLIENT_TRIES;
    }
    public static set LABEL_NO_OF_CLIENT_TRIES(value: string) {
        CampaignConstants._LABEL_NO_OF_CLIENT_TRIES = value;
    }

    public static get LABEL_IS_EXTENSION_WISE(): string {
        return CampaignConstants._LABEL_IS_EXTENSION_WISE;
    }
    public static set LABEL_IS_EXTENSION_WISE(value: string) {
        CampaignConstants._LABEL_IS_EXTENSION_WISE = value;
    }

    public static get LABEL_NO_OF_AGENT_TRIES(): string {
        return CampaignConstants._LABEL_NO_OF_AGENT_TRIES;
    }
    public static set LABEL_NO_OF_AGENT_TRIES(value: string) {
        CampaignConstants._LABEL_NO_OF_AGENT_TRIES = value;
    }

    public static get LABEL_RETRY_AFTER(): string {
        return CampaignConstants._LABEL_RETRY_AFTER;
    }
    public static set LABEL_RETRY_AFTER 
        (value: string) {
        CampaignConstants._LABEL_RETRY_AFTER = value;
    }

    public static get LABEL_TRUNK_NAME(): string {
        return CampaignConstants._LABEL_TRUNK_NAME;
    }
    public static set LABEL_TRUNK_NAME 
        (value: string) {
        CampaignConstants._LABEL_TRUNK_NAME = value;
    }

    public static get LABEL_PREFIX(): string {
        return CampaignConstants._LABEL_PREFIX;
    }
    public static set LABEL_PREFIX(value: string) {
        CampaignConstants._LABEL_PREFIX = value;
    }

    public static get LABEL_DIAL_OUT_WAIT_TIME_IN_SECS(): string {
        return CampaignConstants._LABEL_DIAL_OUT_WAIT_TIME_IN_SECS;
    }
    public static set LABEL_DIAL_OUT_WAIT_TIME_IN_SECS(value: string) {
        CampaignConstants._LABEL_DIAL_OUT_WAIT_TIME_IN_SECS = value;
    }

    public static get LABEL_MODULE_NAME(): string {
        return CampaignConstants._LABEL_MODULE_NAME;
    }
    public static set LABEL_MODULE_NAME 
        (value: string) {
        CampaignConstants._LABEL_MODULE_NAME = value;
    }

    public static get LABEL_DIRECTORY_INFO_URL(): string {
        return CampaignConstants._LABEL_DIRECTORY_INFO_URL;
    }
    public static set LABEL_DIRECTORY_INFO_URL(value: string) {
        CampaignConstants._LABEL_DIRECTORY_INFO_URL = value;
    }

    public static get LABEL_WRAP_UP_TIME_IN_SECS(): string {
        return CampaignConstants._LABEL_WRAP_UP_TIME_IN_SECS;
    }
    public static set LABEL_WRAP_UP_TIME_IN_SECS(value: string) {
        CampaignConstants._LABEL_WRAP_UP_TIME_IN_SECS = value;
    }

    public static get LABEL_CAMPAIGN_FEED_SOURCE(): string {
        return CampaignConstants._LABEL_CAMPAIGN_FEED_SOURCE;
    }
    public static set LABEL_CAMPAIGN_FEED_SOURCE(value: string) {
        CampaignConstants._LABEL_CAMPAIGN_FEED_SOURCE = value;
    }
}