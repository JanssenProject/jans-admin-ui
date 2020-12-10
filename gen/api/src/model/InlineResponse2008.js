/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2008 model module.
 * @module model/InlineResponse2008
 * @version 1.0.0
 */
class InlineResponse2008 {
    /**
     * Constructs a new <code>InlineResponse2008</code>.
     * Sector Identifier Details.
     * @alias module:model/InlineResponse2008
     */
    constructor() { 
        
        InlineResponse2008.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('redirect_uris')) {
                obj['redirect_uris'] = ApiClient.convertToType(data['redirect_uris'], ['String']);
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * XRI i-number. Sector Identifier to uniquely identify the sector.
 * @member {String} id
 */
InlineResponse2008.prototype['id'] = undefined;

/**
 * A human-readable string describing the sector.
 * @member {String} description
 */
InlineResponse2008.prototype['description'] = undefined;

/**
 * Redirection URI values used by the Client. One of these registered Redirection URI values must exactly match the redirect_uri parameter value used in each Authorization Request
 * @member {Array.<String>} redirect_uris
 */
InlineResponse2008.prototype['redirect_uris'] = undefined;

/**
 * List of OAuth 2.0 Client Identifier valid at the Authorization Server.
 * @member {Array.<String>} client_id
 */
InlineResponse2008.prototype['client_id'] = undefined;






export default InlineResponse2008;
