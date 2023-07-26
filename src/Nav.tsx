const navLinks: Array<string> = ['trending', 'your orders', 'community'];

const Nav: React.FC = () => (
  <ul className='main-menu'>
    {navLinks.map((navLink) => {
      return (
        <li key={navLink}>
          <a href={navLink}> {navLink}</a>
        </li>
      );
    })}
  </ul>
);
export default Nav;
