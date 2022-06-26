import React from 'react'
import Navbar from 'components/Navbars/IndexNavbar'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
function LoginViews() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4 col-sm-8 pb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Login For Admins</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Click Button Below To Login</Card.Subtitle>
                    <Card.Text>
                    <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas"></i> 
                    <Link to="/auth/loginadmin">
                    Login
                        </Link>
                    </button>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 col-sm-8 pb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Login For Teacher Assistant</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Click Button Below To Login</Card.Subtitle>
                    <Card.Text>
                    <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas"></i> 
                    <Link to="/auth/loginteachast">
                    Login
                        </Link>
                    </button>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 col-sm-8 pb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Login For Teacher</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Click Button Below To Login</Card.Subtitle>
                    <Card.Text>
                    <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas"></i> 
                    <Link to="/auth/loginteach">
                    Login
                        </Link>
                    </button>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
  )
}

export default LoginViews;