import { useAppStateReducer } from "../AppState/Context";
import { Method } from "../AppState/Reducer";

const UrlBar = () => {
  const [{ method, url }, dispatch] = useAppStateReducer();

  return (
    <div className="w-full flex flex-row justify-center items-center">
      <select
        onChange={(event) =>
          dispatch({ type: "SET_METHOD", method: event.target.value as Method })
        }
        value={method}
        className="bg-blue-500 w-24 text-white rounded-l-full py-1 px-2 pl-2 h-10 appearance-none outline-none shadow-sm hover:shadow"
      >
        <option value={Method.GET}>GET</option>
        <option value={Method.POST}>POST</option>
        <option value={Method.PUT}>PUT</option>
        <option value={Method.PATCH}>PATCH</option>
        <option value={Method.DELETE}>DELETE</option>
      </select>
      <input
        value={url}
        onChange={(event) =>
          dispatch({ type: "SET_URL", url: event.target.value })
        }
        className="w-full border-t border-b py-1 px-2 outline-none h-10 shadow-sm hover:shadow"
      />
      <button
        className="bg-blue-500 w-24 text-white px-4 py-2 rounded-r-full h-10 outline-none shadow-sm hover:shadow"
        onClick={() => {
          fetch(url, {
            method,
          }).then(async (response) => {
            console.log(response.status, await response.text());
          });
        }}
      >
        Send
      </button>
    </div>
  );
};

export default UrlBar;
