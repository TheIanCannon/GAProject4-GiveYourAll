import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchResultsItem({charity}){
  return(
   <div className="SearchResultsItem">
     <Link to={`/charities/${charity.EIN}`}>
       <span className="CharityName">{charity.name}</span>
							<br/><br/>
     </Link>
   </div>
  );
}




