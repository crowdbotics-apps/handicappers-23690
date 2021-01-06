import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfSignIn21190471Reducer from '../features/CopyOfSignIn21190471/redux/reducers'
import SignIn21190470Reducer from '../features/SignIn21190470/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfSignIn21190471: CopyOfSignIn21190471Reducer,
SignIn21190470: SignIn21190470Reducer,

});