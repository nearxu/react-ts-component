import * as React from 'react';

import { Theme, themes } from './theme';
import ThemeContext from './theme';

interface State {
  theme: Theme;
}

export class ThemeProvider extends React.Component<{}, State>{
  state: State = { theme: themes.light };
  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.light ? themes.dark : themes.light
    }))
  }
  render() {
    const { theme } = this.state;
    const { toggleTheme } = this;
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      </ThemeContext.Provider>
    )
  }
}