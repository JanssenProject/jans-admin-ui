// Auth Actions
export const GET_OAUTH2_CONFIG = 'GET_OAUTH2_CONFIG'
export const GET_OAUTH2_CONFIG_RESPONSE = 'GET_OAUTH2_CONFIG_RESPONSE'
export const GET_API_ACCESS_TOKEN = 'GET_API_ACCESS_TOKEN'
export const GET_API_ACCESS_TOKEN_RESPONSE = 'GET_API_ACCESS_TOKEN_RESPONSE'
export const SET_STATE = 'SET_STATE'

export const USERINFO_REQUEST = 'USERINFO_REQUEST'
export const USERINFO_RESPONSE = 'USERINFO_RESPONSE'

// scopes types
export const GET_SCOPES = 'GET_SCOPES'
export const GET_SCOPES_RESPONSE = 'GET_SCOPES_RESPONSE'
export const SEARCH_SCOPES = 'SEARCH_SCOPES'
export const GET_SCOPE_BY_INUM = 'GET_SCOPE_BY_INUM'
export const GET_SCOPE_BY_INUM_RESPONSE = 'GET_SCOPE_BY_INUM_RESPONSE'
export const ADD_SCOPE = 'ADD_SCOPE'
export const ADD_SCOPE_RESPONSE = 'ADD_SCOPE_RESPONSE'
export const EDIT_SCOPE = 'EDIT_SCOPE'
export const EDIT_SCOPE_RESPONSE = 'EDIT_SCOPE_RESPONSE'
export const DELETE_SCOPE = 'DELETE_SCOPE'
export const DELETE_SCOPE_RESPONSE = 'DELETE_SCOPE_RESPONSE'
export const SET_SCOPE_ITEM = 'SET_SCOPE_ITEM'
export const GET_SCOPE_BY_PATTERN = 'GET_SCOPE_BY_PATTERN'
export const GET_SCOPE_BY_PATTERN_RESPONSE = 'GET_SCOPE_BY_PATTERN_RESPONSE'

// Attributes types
export const GET_ATTRIBUTES = 'GET_ATTRIBUTES'
export const GET_ATTRIBUTES_RESPONSE = 'GET_ATTRIBUTES_RESPONSE'
export const SEARCH_ATTRIBUTES = 'SEARCH_ATTRIBUTES'
export const ADD_ATTRIBUTE = 'ADD_ATTRIBUTE'
export const ADD_ATTRIBUTE_RESPONSE = 'ADD_ATTRIBUTE_RESPONSE'
export const EDIT_ATTRIBUTE = 'EDIT_ATTRIBUTE'
export const EDIT_ATTRIBUTE_RESPONSE = 'EDIT_ATTRIBUTE_RESPONSE'
export const GET_ATTRIBUTE_BY_INUM = 'GET_ATTRIBUTE_BY_INUM'
export const GET_ATTRIBUTE_BY_INUM_RESPONSE = 'GET_ATTRIBUTE_BY_INUM_RESPONSE'
export const DELETE_ATTRIBUTE = 'DELETE_ATTRIBUTE'
export const DELETE_ATTRIBUTE_RESPONSE = 'DELETE_ATTRIBUTE_RESPONSE'
export const SET_ATTRIBUTE_ITEM = 'SET_ATTRIBUTE_ITEM'

// Openid Client types
export const GET_OPENID_CLIENTS = 'GET_OPENID_CLIENTS'
export const GET_OPENID_CLIENTS_RESPONSE = 'GET_OPENID_CLIENTS_RESPONSE'
export const SEARCH_CLIENTS = 'SEARCH_CLIENTS'
export const EDIT_CLIENT = 'EDIT_CLIENT'
export const EDIT_CLIENT_RESPONSE = 'EDIT_CLIENT_RESPONSE'
export const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT'
export const ADD_CLIENT_RESPONSE = 'ADD_CLIENT_RESPONSE'
export const DELETE_CLIENT = 'DELETE_CLIENT'
export const DELETE_CLIENT_RESPONSE = 'DELETE_CLIENT_RESPONSE'
export const SET_CLIENT_ITEM = 'SET_CLIENT_ITEM'

//Custom Script
export const GET_CUSTOM_SCRIPT = 'GET_CUSTOM_SCRIPT'
export const GET_CUSTOM_SCRIPT_RESPONSE = 'GET_CUSTOM_SCRIPT_RESPONSE'
export const ADD_CUSTOM_SCRIPT = 'ADD_CUSTOM_SCRIPT'
export const ADD_CUSTOM_SCRIPT_RESPONSE = 'ADD_CUSTOM_SCRIPT_RESPONSE'
export const EDIT_CUSTOM_SCRIPT = 'EDIT_CUSTOM_SCRIPT'
export const EDIT_CUSTOM_SCRIPT_RESPONSE = 'EDIT_CUSTOM_SCRIPT_RESPONSE'
export const GET_CUSTOM_SCRIPT_BY_INUM = 'GET_CUSTOM_SCRIPT_BY_INUM'
export const GET_CUSTOM_SCRIPT_BY_INUM_RESPONSE =
  'GET_CUSTOM_SCRIPT_BY_INUM_RESPONSE'
export const GET_CUSTOM_SCRIPT_BY_TYPE = 'GET_CUSTOM_SCRIPT_BY_TYPE'
export const GET_CUSTOM_SCRIPT_BY_TYPE_RESPONSE =
  'GET_CUSTOM_SCRIPT_BY_TYPE_RESPONSE'
export const DELETE_CUSTOM_SCRIPT = 'DELETE_CUSTOM_SCRIPT'
export const DELETE_CUSTOM_SCRIPT_RESPONSE = 'DELETE_CUSTOM_SCRIPT_RESPONSE'
export const SET_SCRIPT_ITEM = 'SET_SCRIPT_ITEM'

// Smtp
export const GET_SMTP = 'GET_SMTP'
export const GET_SMTP_RESPONSE = 'GET_SMTP_RESPONSE'
export const SET_SMTP = 'SET_SMTP'
export const SET_SMTP_RESPONSE = 'SET_SMTP_RESPONSE'
export const PUT_SMTP = 'PUT_SMTP'
export const PUT_SMTP_RESPONSE = 'PUT_SMTP_RESPONSE'
export const TEST_SMTP = 'TEST_SMTP'
export const TEST_SMTP_RESPONSE = 'TEST_SMTP_RESPONSE'

// Acrs
export const GET_ACRS = 'GET_ACRS'
export const GET_ACRS_RESPONSE = 'GET_ACRS_RESPONSE'
export const PUT_ACRS = 'PUT_ACRS'
export const PUT_ACRS_RESPONSE = 'PUT_ACRS_RESPONSE'
export const GET_ACR_AUTH_SCRIPT = 'GET_ACR_AUTH_SCRIPT'
export const GET_ACR_AUTH_SCRIPT_RESPONSE = 'GET_ACR_AUTH_SCRIPT_RESPONSE'


// fido
export const GET_FIDO = 'GET_FIDO'
export const GET_FIDO_RESPONSE = 'GET_FIDO_RESPONSE'
export const PUT_FIDO = 'PUT_FIDO'
export const PUT_FIDO_RESPONSE = 'PUT_FIDO_RESPONSE'

// logging
export const GET_LOGGING = 'GET_LOGGING'
export const GET_LOGGING_RESPONSE = 'GET_LOGGING_RESPONSE'
export const PUT_LOGGING = 'PUT_LOGGING'
export const PUT_LOGGING_RESPONSE = 'PUT_LOGGING_RESPONSE'

export const RESET = 'RESET'
export const SET_ITEM = 'SET_ITEM'

// Plugin
export const GET_ALL_PLUGIN_MENU = 'GET_ALL_PLUGIN_MENU'
export const GET_ALL_PLUGIN_MENU_RESPONSE = 'GET_ALL_PLUGIN_MENU_RESPONSE'

// Ldap
export const GET_LDAP = 'GET_LDAP'
export const GET_LDAP_RESPONSE = 'GET_LDAP_RESPONSE'
export const SET_LDAP = 'SET_LDAP'
export const SET_LDAP_RESPONSE = 'SET_LDAP_RESPONSE'
export const PUT_LDAP = 'PUT_LDAP'
export const PUT_LDAP_RESPONSE = 'PUT_LDAP_RESPONSE'
export const ADD_LDAP = 'ADD_LDAP'
export const ADD_LDAP_RESPONSE = 'ADD_LDAP_RESPONSE'
export const DELETE_LDAP = 'DELETE_LDAP'
export const DELETE_LDAP_RESPONSE = 'DELETE_LDAP_RESPONSE'
export const TEST_LDAP = 'TEST_LDAP'
export const TEST_LDAP_RESPONSE = 'TEST_LDAP_RESPONSE'
// Couchbase
export const GET_COUCHBASE = 'GET_COUCHBASE'
export const GET_COUCHBASE_RESPONSE = 'GET_COUCHBASE_RESPONSE'
export const SET_COUCHBASE = 'SET_COUCHBASE'
export const SET_COUCHBASE_RESPONSE = 'SET_COUCHBASE_RESPONSE'
export const PUT_COUCHBASE = 'PUT_COUCHBASE'
export const PUT_COUCHBASE_RESPONSE = 'PUT_COUCHBASE_RESPONSE'

//cache
export const GET_CACHE = 'GET_CACHE'
export const GET_CACHE_RESPONSE = 'GET_CACHE_RESPONSE'
export const GET_MEMORY_CACHE = 'GET_MEMORY_CACHE'
export const GET_MEMORY_CACHE_RESPONSE = 'GET_MEMORY_CACHE_RESPONSE'
export const GET_MEM_CACHE = 'GET_MEM_CACHE'
export const GET_MEM_CACHE_RESPONSE = 'GET_MEM_CACHE_RESPONSE'
export const GET_NATIVE_CACHE = 'GET_NATIVE_CACHE'
export const GET_NATIVE_CACHE_RESPONSE = 'GET_NATIVE_CACHE_RESPONSE'
export const GET_REDIS_CACHE = 'GET_REDIS_CACHE'
export const GET_REDIS_CACHE_RESPONSE = 'GET_REDIS_CACHE_RESPONSE'

export const SET_CACHE = 'SET_CACHE'
export const SET_CACHE_RESPONSE = 'SET_CACHE_RESPONSE'

export const PUT_CACHE = 'PUT_CACHE'
export const PUT_CACHE_RESPONSE = 'PUT_CACHE_RESPONSE'
export const PUT_MEMORY_CACHE = 'PUT_MEMORY_CACHE'
export const PUT_MEMORY_CACHE_RESPONSE = 'PUT_MEMORY_CACHE_RESPONSE'
export const PUT_MEM_CACHE = 'PUT_MEM_CACHE'
export const PUT_MEM_CACHE_RESPONSE = 'PUT_MEM_CACHE_RESPONSE'
export const PUT_NATIVE_CACHE = 'PUT_NATIVE_CACHE'
export const PUT_NATIVE_CACHE_RESPONSE = 'PUT_NATIVE_CACHE_RESPONSE'
export const PUT_REDIS_CACHE = 'PUT_REDIS_CACHE'
export const PUT_REDIS_CACHE_RESPONSE = 'PUT_REDIS_CACHE_RESPONSE'

// User Logout
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

//Jwks
export const GET_JWKS = 'GET_JWKS'
export const GET_JWKS_RESPONSE = 'GET_JWKS_RESPONSE'

//JSON Config
export const GET_JSON_CONFIG = 'GET_JSON_CONFIG'
export const GET_JSONCONFIG_RESPONSE = 'GET_JSONCONFIG_RESPONSE'
export const PATCH_JSON_CONFIG = 'PATCH_JSON_CONFIG'
export const PATCH_JSONCONFIG_RESPONSE = 'PATCH_JSONCONFIG_RESPONSE'
