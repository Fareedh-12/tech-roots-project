import React from 'react'

import { Link } from "react-router-dom";

function Navbar() {
    return ( <>
  


<nav className="navbar navbar-light bg-light justify-content-between">
					<i className="navbar brand">Home page</i>

					<div className="form-inline">
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							id="laptop-home-bt"
						>
							<a>
								<Link to="/create-laptop-requests"> Register for a laptop</Link>
							</a>
						</button>
						<button
							id="Donator-home-bt"
							className="btn btn-outline-success my-2 my-sm-0"
						>
							<a>
								<Link to="/create-donator-requests">Donate a laptop</Link>
							</a>
						</button>
					</div>
				</nav>
    </> );
}

export default Navbar;