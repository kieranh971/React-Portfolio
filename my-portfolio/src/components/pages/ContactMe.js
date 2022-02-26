import React, { useState } from "react";

export default function ContactMe() {

    function emailValidation(userEmail) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(userEmail).toLowerCase());
    }

    const [userEmail, setEmail] = useState("");
    const [userName, setName] = useState("");
    const [userMessage, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "userEmail") {
            setEmail(inputValue);
            const isValid = emailValidation(inputValue);
            if (!isValid) {
                setErrorMessage("Invalid email, try again");
            } else {
                setErrorMessage("");
                setEmail(inputValue);
            }
        } else if (inputType === "userName") {
            if (!inputValue.length) {
                setName(inputValue);
                setErrorMessage(`${inputType} required`);
            } else {
                setErrorMessage("");
                setName(inputValue);
            }
        } else if (inputType === "userMessage") {
            if (!inputValue.length) {
                setMessage(inputValue);
                setErrorMessage(`${inputType} required`);
            } else {
                setErrorMessage("");
                setMessage(inputValue);
            }
        }
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="nameInput">Name: </label>
                    <input
                            className="form-control"
                            id="nameInput"
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Please enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput">Email Address: </label>
                    <input
                            className="form-control"
                            id="emailInput"
                            value={userEmail}
                            name="userEmail"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Please enter your email"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="messageInput">Message: </label>
                    <textarea
                        className="form-control"
                        id="messageInput"
                        value={userMessage}
                        name="userMessage"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Say hello!"
                    ></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="user-error">{errorMessage}</p>
                    </div>
                )}
                <button type="button" onClick={handleSubmission}>Submit</button>
            </form>
        </div>
    )
}