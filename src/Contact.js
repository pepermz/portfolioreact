import "./Contact.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div>
      <div className='contact'>
        <h2>Contact</h2>
        <address>
          E:
          <a href="mailto:jose.ram.18@gmail.com">jose.ram.18@gmail.com</a> <br></br>
          P:
          <a href="tel:915.691.1091">(915)691-1091</a>
        </address>
      </div>
    </div >
  )
}

export default Contact;