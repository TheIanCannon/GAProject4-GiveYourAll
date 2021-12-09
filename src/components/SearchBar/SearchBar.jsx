import React, {useState} from 'react';
import * as charityAPI from "../../utilities/charities-api";
import './SearchBar.css';

export default function SearchBar({setCharities}){

		const [searchTerm, setSearchTerm] = useState("");

		async function handleSubmit(evt){
				evt.preventDefault();
				let searchResults = await charityAPI.search(searchTerm);
				searchResults=searchResults.filter((r)=>r.mission && r.rating && r.cause);
				setCharities(searchResults);
		}

		return(
				<div className="SearchBar">
						<div className="col-xs-6 col-xs-offset-6">
								<form onSubmit={handleSubmit}>
										<div className="input-group">
												<input type="text" className="form-control" 
														placeholder="Find a Charity" value={searchTerm} onChange={(evt) => setSearchTerm(evt.target.value)}/>
												<span className="input-group-btn">
														<button className="SearchButton" type="submit">Search</button>
												</span>
										</div>
								</form>
						</div>
				</div>	
		);
}