import {SAVE_PRINCIPAL, SavePrincipalAction} from './save.principal.action';
import {Principal} from "./principal.model";

export function principalReducer(state: Principal, action: SavePrincipalAction) {
  switch (action.type) {
    case SAVE_PRINCIPAL:
      return Object.assign({}, state, action.payload);
      break;
    default:
      return state;
      break;

  }
}

