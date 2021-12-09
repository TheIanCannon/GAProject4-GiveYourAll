import React from 'react';

export default function SearchResultsItem({charity, setCharity, setActiveCharity}){
	
	function handleClick(){
			setActiveCharity(true);
			setCharity(charity);	
	}

	return(
   <div className="SearchResultsItem">
     <button onClick={() => handleClick()}>
       <span className="CharityName">{charity.name}</span>
							<br/>
     </button>
					<br/>
   </div>
  );
}




