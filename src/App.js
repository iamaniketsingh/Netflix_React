import "./App.css";
import Card from "./Components/Card";
import data from "./Components/data";
function App() {
  return (
    <>
      <h1 className="heading_style">Top Netflix Series</h1>
      {data.map((val) => {
        return(
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={ val.sname}
          link={val.link}
        ></Card>
      )})}
    </>
  );
}

export default App;
