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

	function validateForm(form) {
		if (
			form.firstName.value.length === 0 ||
			form.lastName.value.length === 0 ||
			form.email.value.length === 0 ||
			form.phoneNumber.value.length === 0
		) {
			return false;
		}

		return true;
	}
	function messageAlert() {
		if (validateForm(document.laptopRequestForm)) {
			alert(
				"thank you for your completing the request form. your request have been recived "
			);
		}
	}
	return (
		<div className="form-card">
			<form onSubmit={submitForm} className="form" name="laptopRequestForm">
				<div className="form-container">
					<label>First Name</label>
					<input
						required
						id="firstName"
						type="text"
						value={firstName}
						name="firstName"
						placeholder="First Name"
						className="input_field"
						onChange={handleClick}
					/>
					<label>Last Name</label>
					<input
						required
						type="text"
						value={lastName}
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						className="input_field"
						onChange={handleClick}
					/>
					<label>Email address</label>
					<input
						required
						type="text"
						value={email}
						id="email"
						name="email"
						placeholder="Email Address"
						className="input_field"
						onChange={handleClick}
					/>
					<label>Phone Number</label>
					<input
						required
						type="number"
						value={phoneNumber}
						id="phoneNumber"
						name="phoneNumber"
						placeholder="Phone Number"
						className="input_field"
						onChange={handleClick}
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
