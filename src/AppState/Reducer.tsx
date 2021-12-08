export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type Header = {
  key: string;
  value: string;
  enabled: boolean;
};

export type AppState = {
  method: Method;
  url: string;
  headers: Header[];
  body: string;
  response: string;
  responseHeaders: [string, string][];
  responseStatus: number;
};

export type Action =
  | { type: "SET_METHOD"; method: Method }
  | { type: "SET_URL"; url: string };

export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_METHOD":
      return { ...state, method: action.method };
    case "SET_URL":
      return { ...state, url: action.url };
    default:
      return state;
  }
};
