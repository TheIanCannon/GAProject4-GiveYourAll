import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchResultsItem({ein, setActiveCharity, setCharity, charity}){
		const navigate = useNavigate();
		

		function handleClick(){
				setCharity(charity);
				navigate(`/donations/new`);
				setActiveCharity(true);
		}

		return(
   <div className="SearchResultsItem">
     <button onClick={() => handleClick()} >
       <span className="CharityName">{charity.name}</span>
							<br/><br/>
     </button>
   </div>
  );
}




