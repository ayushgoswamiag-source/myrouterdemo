import React from 'react'
import { Link, Outlet, } from 'react-router-dom'


function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Aboutus">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Register">register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Product/1">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Registration">Registration</Link>
        </li>
      </ul>
    </div>
</nav>
<div>
  <Outlet/>
</div>
    </>
  )
}

export default App
