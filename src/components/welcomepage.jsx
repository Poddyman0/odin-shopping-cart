import NavBar from './Navbar';


const WelcomePage = () => {
    return (
      <>
      <NavBar/>
      <h1 data-testid="welcome-message-test">Welcome to our shop!</h1>;
    </>
    )

  };
  
  export default WelcomePage;