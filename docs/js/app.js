function App() {
  const [current, setCurrent] = React.useState('home');
  const nav = key => {
    setCurrent(key);
    if (key && key.indexOf('service:') === 0) {
      window.scrollTo({
        top: 0
      });
      return;
    }
    if (key === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const scrollToSection = () => {
      const el = document.getElementById(key);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    };
    if (current && current.indexOf('service:') === 0) {
      setCurrent('home');
      setTimeout(scrollToSection, 60);
    } else {
      scrollToSection();
    }
  };
  window.OENav = nav;
  React.useEffect(() => {
    const h = (window.location.hash || '').slice(1);
    if (h) setTimeout(() => nav(h), 150);
  }, []);
  const isService = current && current.indexOf('service:') === 0;
  const headerCur = isService ? 'services' : current;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "#main",
    style: {
      position: 'absolute',
      left: -9999,
      top: 0
    }
  }, "Skip to content"), /*#__PURE__*/React.createElement(window.OEHeader, {
    current: headerCur,
    onNav: nav
  }), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, isService ? /*#__PURE__*/React.createElement(window.OEServiceDetail, {
    slug: current.slice(8),
    onNav: nav
  }) : /*#__PURE__*/React.createElement(window.OEHomePage, {
    onNav: nav
  })), /*#__PURE__*/React.createElement(window.OEFooter, null), /*#__PURE__*/React.createElement(window.OETicker, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));