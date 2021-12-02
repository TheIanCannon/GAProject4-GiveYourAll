import React from 'react';

export default function SearchPage(){
return(
<div className="row">
  <div className="col-xs-6 col-xs-offset-6">
    <form action="/" method="GET">
      <div className="input-group">
        <input type="text" name="charityAPI" className="form-control"
          placeholder="Search for a Charity"/>
        <span className="input-group-btn">
          <button className="btn btn-success" type="submit">Search</button>
        </span>
      </div>
    </form>
  </div>
</div>	
);}