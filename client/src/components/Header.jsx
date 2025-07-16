import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.header`
  background-color: #061528;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.nav`
  a {
    margin-left: 20px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #00bcd4;
    }
  }
`;

function Header() {
  return (
    <Navbar>
      <h2>CourseHub</h2>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </NavLinks>
    </Navbar>
  );
}

export default Header;