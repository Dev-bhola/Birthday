import { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);
  const clearHandle = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} BIRTHDAY TODAY</h3>
        <section>
          <List data={people} />
        </section>
        <button className="btn btn-block" onClick={clearHandle}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
