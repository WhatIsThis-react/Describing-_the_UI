import ConditionalList from "./ConditionalList";
import List from "./List";
import Header from "./Header";

function App() {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: " center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header name="효린" />
      <List />
      <ConditionalList />
    </div>
  );
}

export default App;
