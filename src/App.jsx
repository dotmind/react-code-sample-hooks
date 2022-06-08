import components from './components';

const currentHash = (window.location.hash && window.location.hash.substr(1)) || '';

function App() {
  const renderMenu = () => {
    const links = components.map(c => c.hash);
    const navigate = link => () => {
      window.location.hash = link;
      window.location.reload();
    };

    return links.map(link => (
      <p
        className={'link'}
        onClick={navigate(link)}
        key={link}>
        {link}
      </p>
    ));
  }

  const renderComponent = () => {
    const component = components.find(c => c.hash === currentHash);
    return (component && component.render()) || renderMenu();
  }

  return (
    <div className={'App'}>
      <a href={'/'} id={'link-menu'}>menu <span role={'img'} aria-label={''}>🏃</span></a>
      <div id={'demo-wrapper'}>
        {renderComponent()}
      </div>
    </div>
  );

}

export default App;
