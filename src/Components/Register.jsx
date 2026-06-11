import React, { useState } from 'react'

function Register() {
  const [data1, setData1] = useState({});
  const [err1, setErr1] = useState("");
  const handlechange = (e) => {
    setData1({ ...data1, [e.target.name]: e.target.value })
  }
  const handlesumbit = (e) => {
    e.preventDefault();
    if (!data1.name || !data1.email || !data1.password || !data1.phone) {
      return setErr1("All fields are required");
    }
    if (!data1.email.includes("@")) {
      return setErr1("Invalid Email");
    }
    if (data1.password.length < 6) {
      return setErr1("Password must be at least 6 characters long");
    }
    if (!/^\d{10}$/.test(data1.phone)) {
      return setErr1("Invalid Phone Number");
    }
    else {
      setErr1("");
      console.log(data1)
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <hr />
      <form onSubmit={handlesumbit}>
        Enter Name: <input type="text" placeholder="Username" name="name" onChange={handlechange} />
        <br />
        Enter Email: <input type="email" placeholder="Email" name="email" onChange={handlechange} />
        <br />
        Enter Password: <input type="password" placeholder="Password" name="password" onChange={handlechange} />
        <br />
        Enter Phone: <input type="text" placeholder="Phone" name="phone" onChange={handlechange} />
        <br />
        <input type="submit" value="Register" />
      </form>
      {err1 && <p>{err1}</p>}
    </div>
  )
}

export default Register
