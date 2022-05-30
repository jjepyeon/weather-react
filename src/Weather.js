import Search from "./Search";
import Temperature from "./Temperature";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <Search />
      <Temperature />
    </div>
  );
}
