import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Navbar() {
  // function MouseOver(event) {
  //   event.target.style.background = '#FFFFFF';
  //   event.target.style.opacity= "0.12px"
  // }
  // function MouseOut(event){
  //   event.target.style.background="";
  // }
    return (
      <div className="nav-container border border-1">
            <Nav defaultActiveKey="/home" className="flex-column">
                <div className="logo-container ps-4 mt-3 d-flex align-items-center" >
                    <img src="/img/LMS-logo-white.png" alt="" /><span className='lms-txt-white ms-3 '>LMS</span>
                </div>
          {/* <Nav.Link href="/LoginForm" className='mt-5 text-white'><img src="/img/issued-books-logo.png" alt="" /> &nbsp; &nbsp; Issued Books</Nav.Link>
          <Nav.Link href="link-1" className='mt-2 text-white'><img src="/img/all-books-logo.png" alt="" /> &nbsp; &nbsp; All Books</Nav.Link>
          <Nav.Link href="/Students" className='mt-2 text-white'><img src="/img/students-logo.png" alt="" />&nbsp; &nbsp; Students</Nav.Link> */}
        </Nav>  

        <div className="btn-group d-flex flex-column justify-content-between mt-4 py-3">
          <Button variant="" className=' text-white d-flex justify-content-evenly' >
            <img src="/img/issued-books-logo.png" alt="" className='pt-1'/>
            <p className='pe-4'>Issued Books</p>
          </Button>
          <Button variant="" className=' text-white d-flex justify-content-evenly' >
            <img src="/img/all-books-logo.png" alt="" className='pt-1 ' />
            <p className='pe-5'>All Books</p>
          </Button>
          <Button variant="" className=' text-white d-flex justify-content-evenly' >
            <img src="/img/students-logo.png" alt="" className='pt-1' />
            <p className='pe-5'>Students</p>
          </Button>
        </div>
       
        
      </div>
    
  );
}

export default Navbar;