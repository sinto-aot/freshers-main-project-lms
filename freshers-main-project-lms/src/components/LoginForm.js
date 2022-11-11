import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
    return (

        <div className='d-flex justify-content-center login-container  align-items-center '>
            
            <Form className="login-form align-items-center mt-5 ">
                <p className='login-head'>Login</p>
                <p className='login-txt'>Welcome back! Please enter your details.</p>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Student</a>
                    </li>
                </ul>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="" className='login-btn text-white' type="submit">
                    Submit
                </Button>
         </Form>
      </div>
    
  );
}

export default LoginForm;