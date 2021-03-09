import {
  GET_SCOPES,
  GET_SCOPES_RESPONSE,
  GET_SCOPE_BY_INUM,
  GET_SCOPE_BY_INUM_RESPONSE,
  ADD_SCOPE,
  ADD_SCOPE_RESPONSE,
  EDIT_SCOPE,
  EDIT_SCOPE_RESPONSE,
  DELETE_SCOPE,
  DELETE_SCOPE_RESPONSE,
  RESET,
  SET_ITEM,
  SET_API_ERROR
} from "../actions/types";

const INIT_STATE = {
		  items: [],
		  loading: false,
		  hasApiError: false
		};

export default (state = INIT_STATE, action) => {
	
	switch (action.type) {	
    case GET_SCOPES:
      return {
        ...state,
        loading: true
      };
    case GET_SCOPES_RESPONSE:
      return {
        ...state,
        items: action.payload.data,
        loading: false,
        hasApiError: false
      };      
    case GET_SCOPE_BY_INUM:
        return {
          ...state,
          loading: true
        };
      case GET_SCOPE_BY_INUM_RESPONSE:
        return {
          ...state,
          items: action.payload.data,
          loading: false,
          hasApiError: false
        };
    case ADD_SCOPE:
        return {
          ...state,
          loading: true
        };
      case ADD_SCOPE_RESPONSE:
        return {
          ...state,
          items: [...state.items, action.payload.data],
          loading: false,
          hasApiError: false
        };        
      case EDIT_SCOPE:
          return {
            ...state,
            loading: true
          };
        case EDIT_SCOPE_RESPONSE:
          return {
            ...state,
            items: [...state.items],
            loading: false,
            hasApiError: false
          };
        case DELETE_SCOPE:
            return {
              ...state,
              loading: true
            };
          case DELETE_SCOPE_RESPONSE:
            return {
              ...state,
              items: state.items.filter(item => item.inum !== action.payload.data)
            };
          case SET_ITEM:
              return {
                ...state,
                item: action.payload.item,
                loading: false
              };
          case SET_API_ERROR:
            return { ...state, loading: false, hasApiError: true };
          case RESET:
            return {
              ...state,
              items: INIT_STATE.items,
              loading: INIT_STATE.loading,
              hasApiError: INIT_STATE.hasApiError
            };
          default:
            return {
              ...state
            };
        }
      };

