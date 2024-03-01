import { useNotifications } from "./hooks/useNotifications";
import { postProduct } from "../src/services/services/postProduct";
import "./App.css";

function App() {
  const { data, loading } = useNotifications();
  const handleClick = (e) => {
    e.preventDefault()
    postProduct()
  }
  return (
    <>
      {data !== null && loading === false && <h1>{data?.title}</h1>}
      <div className="card">
        <button onClick={handleClick}>Add product</button>
        {loading && data === null && "loading..."}
      </div>
    </>
  );
}

export default App;
