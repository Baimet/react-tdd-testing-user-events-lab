import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setInterests({ ...interests, [name]: checked });
    } else {
      if (name === "name") setName(value);
      if (name === "email") setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.keys(interests)
    .filter((interest) => interests[interest])
    .map((interest) => interest.replace("interest", "Interest "));

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="interest1"
                checked={interests.interest1}
                onChange={handleInputChange}
              />
              Interest 1
            </label>
            <label>
              <input
                type="checkbox"
                name="interest2"
                checked={interests.interest2}
                onChange={handleInputChange}
              />
              Interest 2
            </label>
            <label>
              <input
                type="checkbox"
                name="interest3"
                checked={interests.interest3}
                onChange={handleInputChange}
              />
              Interest 3
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Thank you, {name}!</h3>
          <p>Your email: {email}</p>
          {selectedInterests.length > 0 && (
            <p>Your selected interests: {selectedInterests.join(", ")}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
