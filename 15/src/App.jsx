import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
constructor(props) {
    super(props);
    this.state = {
      currentTheme: themes[0],
    };
  }

  changeTheme = (theme) => {
    this.setState({ currentTheme: theme });
  }

  render() {
    const { currentTheme } = this.state;
    const contextValue = {
      currentTheme,
      themes,
      changeTheme: this.changeTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
          <div>
            <ThemeSwitcher />
            <Tabs defaultActiveKey="home" className="mb-3">
              <Tab eventKey="home" title="Home">
                <Home />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Profile />
              </Tab>
            </Tabs>
          </div>
        </ThemeContext.Provider>
    );
  }
  // END
}

export default App;
