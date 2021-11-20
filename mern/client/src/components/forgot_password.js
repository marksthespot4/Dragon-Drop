import Button from 'react-bootstrap/Button';

export default (props) => {
    
  return (
      <div>
          <h1>Reset your password</h1>
          <p>To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.</p>
          Email
          <input
            id="userEmail"
            type="email"
            placeholder="Email">
          </input>
          <Button>
              Reset Password
          </Button>
          
      </div>
  );
};