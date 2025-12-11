import "./App.css";
import Provider from "provider";

const App = () => {
  return (
    <div className="content">
      <div
        style={{
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "2px 20px",
        }}
      >
        <h1>Toolbar mf_consumer</h1>
      </div>
      <Provider />
    </div>
  );
};

export default App;
