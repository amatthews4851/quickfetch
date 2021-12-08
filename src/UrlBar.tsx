import * as React from "react";

enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

const UrlBar = () => {
  const [method, setMethod] = React.useState(Method.GET);
  const [url, setUrl] = React.useState("");

  return (
    <div className="w-full flex flex-row justify-center items-center">
      <select
        onChange={(event) => setMethod(event.target.value as Method)}
        value={method}
        className="bg-blue-500 w-24 text-white rounded-l-full py-1 px-2 pl-2 my-4 ml-4 h-10"
      >
        <option value={Method.GET}>GET</option>
        <option value={Method.POST}>POST</option>
        <option value={Method.PUT}>PUT</option>
        <option value={Method.PATCH}>PATCH</option>
        <option value={Method.DELETE}>DELETE</option>
      </select>
      <input
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        className="w-full border-t border-b py-1 px-2 outline-none my-4 h-10"
      />
      <button
        className="my-4 mr-4 bg-blue-500 w-24 text-white px-4 py-2 rounded-r-full h-10"
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
