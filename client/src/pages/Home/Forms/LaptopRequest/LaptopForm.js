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
	const closeModale = document.querySelector(".close_modale");
	const btn = document.querySelector(".btn1");
	const modale = document.querySelector(".modale-content");
	const form = document.querySelector(".form");
	//function display greeting after submit the from
	function messageGreet() {
		btn.addEventListener("click", messageAlert);
		function messageAlert() {
			console.log("heloo");
			modale.style.display = "block";
		}
		closeModale.addEventListener("click", messageClosed);
		function messageClosed() {
			console.log("heloo");
			modale.style.display = "none";
		}
		btn.addEventListener("click", formApear);
		function formApear() {
			console.log("heloo");
			form.style.display = "none";
		}
	}
	return (
		<div className="form-card">
			<div className="modale-content">
				<span className="close_modale">&times;</span>
				<p className="newPragraph">
					thank you for your completing the request form. your request have been
					recived and you have been added to our waiting list
				</p>
			</div>
			<form onSubmit={submitForm} className="form">
				<div className="form-conatiner">
					<label>First Name</label>
					<input
						required
						type="text"
						value={firstName}
						name="firstName"
						placeholder="first name"
						className="firstInput"
						onChange={handleClick}
					/>
					<label>Last Name</label>
					<input
						required
						type="text"
						value={lastName}
						name="lastName"
						placeholder="lastName"
						className="firstInput"
						onChange={handleClick}
					/>
					<label>Email address</label>
					<input
						required
						type="text"
						value={email}
						name="email"
						placeholder="email"
						className="firstInput"
						onChange={handleClick}
					/>
					<label>Phone Number</label>
					<input
						required
						type="number"
						value={phoneNumber}
						name="phoneNumber"
						placeholder="phon number"
						className="firstInput"
						onChange={handleClick}
					/>
					<button type="submit" onClick={messageGreet} className="btn1">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default LaptopForm;
