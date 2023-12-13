// import "./App.css";
import items from "../mock.json";
import Reviewlist from "./Reviewlist.js";

function App() {
  // console.log(items);
  const handleDelete = (id) => {
    alert(id);
  };
  return (
    <div>
      <Reviewlist items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;
