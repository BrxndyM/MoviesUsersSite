import React, {useState} from 'react'
import { Nav, Logo, LoginContainer, Login } from './styles';
import SignedInHeader from './SignedInHeader';


function Header(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
     const renderHeader =() => {
        if (isLoggedIn) {
            return <SignedInHeader />;
          }
      
     
        //if logged in show the logged in header
        return(

            
            <LoginContainer>
                <Login onClick={handleLogin}>
                    Login
                </Login>
            </LoginContainer>

            
        )
     }

    console.log("movieed");
return (
    <Nav> 

     <Logo src="https://w7.pngwing.com/pngs/459/965/png-transparent-popcorn-film-illustration-cinema-popcorn-and-film-popcorn-in-container-illustration-food-logo-film.png" alt="Flick Picks" />   
    {renderHeader()}
    </Nav>
    
)
}
export default Header