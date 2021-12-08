import { AppStateContextProvider } from "./AppState/Context";
import Headers from "./components/Headers";
import UrlBar from "./components/UrlBar";

function App() {
  return (
    <div className="w-full h-full p-4">
      <AppStateContextProvider>
        <UrlBar />
        <Headers />
      </AppStateContextProvider>
    </div>
  );
}

export default App;
