import { doc } from "prettier";
import React, { useState } from "react";
import "./LaptopForm.css";

function LaptopForm() {
	const [firstName, setFirst] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setNumber] = useState("");
	function handleClick(e) {
		if (e.target.name === "firstName") {
			setFirst(e.target.value);
		} else if (e.target.name === "lastName") {
			setLastName(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "phoneNumber") {
			setNumber(e.target.value);
		} else {
			return null;
		}
	}
	function submitForm(e) {
		e.preventDefault();
		setFirst("");
		setLastName("");
		setEmail("");
		setNumber("");

		fetch("/api/laptop_request", {
			method: "POST",
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				phoneNumber: phoneNumber,
			}),
			headers: { "content-type": "application/json" },
		});
	}

	const modale = document.querySelector(".modale-content");
	const form = document.querySelector(".form");

	//function display greeting after submit the from
	function messageAlert() {
		document.body.style.backgroundColor = "black";
		console.log("heloo");
		modale.style.display = "block";
		form.style.display = "none";
	}

	function messageClosed() {
		console.log("heloo");
		modale.style.display = "none";
	}

	return (
		<div className="form-card">
			<div className="modale-content">
				<p className="newPragraph">
					Thank You for your completing the Request Form. Your request has been
					received and you have been added to our waiting list.
				</p>
				<button onClick={messageClosed} className="close_modale">
					close
				</button>
			</div>
			<form onSubmit={submitForm} className="form">
				<div className="form-conatiner">
					<label className="class_label">First Name </label>
					<input
						type="text"
						value={firstName}
						name="firstName"
						placeholder="First Name"
						className="firstInput"
						onChange={handleClick}
						required
					/>
					<label className="class_label">Last Name</label>
					<input
						type="text"
						value={lastName}
						name="lastName"
						placeholder="Last Name"
						className="firstInput"
						onChange={handleClick}
						required
					/>
					<label className="class_label">Email Address</label>
					<input
						type="text"
						value={email}
						name="email"
						placeholder="Email"
						className="firstInput"
						onChange={handleClick}
						required
					/>
					<label className="class_label">phon Number </label>

					<input
						type="number"
						value={phoneNumber}
						name="phoneNumber"
						placeholder="Phone Number"
						className="firstInput"
						onChange={handleClick}
						required
					/>
					<button type="submit" onClick={messageAlert} className="btn1">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default LaptopForm;
