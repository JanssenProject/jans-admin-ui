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
 * The AuthenticationMethod1 model module.
 * @module model/AuthenticationMethod1
 * @version 1.0.0
 */
class AuthenticationMethod1 {
    /**
     * Constructs a new <code>AuthenticationMethod1</code>.
     * Authentication method to be updated as default.
     * @alias module:model/AuthenticationMethod1
     */
    constructor() { 
        
        AuthenticationMethod1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthenticationMethod1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenticationMethod1} obj Optional instance to populate.
     * @return {module:model/AuthenticationMethod1} The populated <code>AuthenticationMethod1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticationMethod1();

            if (data.hasOwnProperty('defaultAcr')) {
                obj['defaultAcr'] = ApiClient.convertToType(data['defaultAcr'], 'String');
            }
            if (data.hasOwnProperty('oxtrustAcr')) {
                obj['oxtrustAcr'] = ApiClient.convertToType(data['oxtrustAcr'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} defaultAcr
 */
AuthenticationMethod1.prototype['defaultAcr'] = undefined;

/**
 * @member {String} oxtrustAcr
 */
AuthenticationMethod1.prototype['oxtrustAcr'] = undefined;






export default AuthenticationMethod1;
