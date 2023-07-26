import Nav from './Nav';

const Header: React.FC = () => (
  <header className='site-header'>
    <div className='site-identity'>
      <a>
        <img
          className='eefe-logo'
          src='/icons8-space-64.png'
          alt='eefe spaceship logo'
        />
      </a>
      <h1>Extraterrestrial Excursions for Earthlings</h1>
    </div>
    <Nav />
  </header>
);

export default Header;
