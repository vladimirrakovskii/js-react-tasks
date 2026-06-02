import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
static contextType = ThemeContext;

    handleThemeChange = (theme) => {
        this.context.changeTheme(theme);
    }

    render() {
        const { currentTheme, themes } = this.context;

        return (
            <ButtonGroup className="mb-3">
                {themes.map((theme) => (
                    <ToggleButton
                        key={theme.id}
                        id={`theme-${theme.id}`}
                        type="radio"
                        variant="outline-primary"
                        name="theme"
                        value={theme.name}
                        checked={currentTheme.id === theme.id}
                        onChange={() => this.handleThemeChange(theme)}
                    >
                        {theme.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
  // END
}

export default ThemeSwitcher;
