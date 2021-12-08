import * as React from "react";
import { Action, AppState, Method, reducer } from "./Reducer";

const defaultState: AppState = {
  method: Method.GET,
  url: "",
  headers: [],
  body: "",
  response: "",
  responseHeaders: [],
  responseStatus: 0,
};

const AppStateContext = React.createContext<
  [AppState, (action: Action) => void]
>([defaultState, () => {}]);

export const AppStateContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  return (
    <AppStateContext.Provider value={[state, dispatch]}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStateReducer = () => React.useContext(AppStateContext);
