import React, {useState} from 'react';
import * as charityAPI from "../../utilities/charities-api";

export default function SearchBar({setCharities}){
		const [searchTerm, setSearchTerm] = useState("");
		async function handleSubmit(evt){
				evt.preventDefault();
				const searchResults = await charityAPI.search(searchTerm);
				setCharities(searchResults);
		}
		return(
				<div className="row">
						<div className="col-xs-6 col-xs-offset-6">
								<form onSubmit={handleSubmit}>
										<div className="input-group">
												<input type="text" className="form-control" 
														placeholder="Find a Charity" value={searchTerm} onChange={(evt) => setSearchTerm(evt.target.value)}/>
												<span className="input-group-btn">
														<button className="btn btn-success" type="submit">Search</button>
												</span>
										</div>
								</form>
						</div>
				</div>	
		);
}