import "./Search.css";

export default function Search() {
  return (
    <div>
      <div className="searchbutton" id="search-form">
        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              placeholder="Enter city"
              id="form1"
              className="form-control"
            />
          </div>
          <div className="input-group-append">
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="locationButton">
            <button className="btn btn-info">Current Location</button>
          </div>
        </div>
      </div>
    </div>
  );
}
