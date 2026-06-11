import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const nav1 = useNavigate();
    const [prodid, setprodid] = React.useState('');

    const HandleClick = () => {
        nav1(("/Product/" + prodid));
    }
  return (
    <div>
        <h1>Welcome to our website!</h1>
            Product Id : <input type='text' value={prodid} onChange={(e) => setprodid(e.target.value)} />
        <button classname='btn btn-primary' on click={HandleClick}>Product</button>
    </div>
  )
}

export default Home
