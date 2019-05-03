import * as React from 'react';

export type Theme = React.CSSProperties;

type Themes ={
    dark:Theme;
    light:Theme;
}

export const themes:Themes = {
    dark:{
        color:'block',
        backgroundColor:'white'
    },
    light:{
        color:'white',
        backgroundColor:'block'
    }
}

export type ThemeContextProps = {
    theme:Theme;
    toggleTheme?:() => void
}

const ThemeContext = React.createContext<ThemeContextProps>({
    theme:themes.light
});

export default ThemeContext;

interface State {
    theme:Theme;
}

export class ThemeProvider extends React.Component<{},State>{
    state:State = {theme:themes.light};
    toggleTheme = () => {
        this.setState(state => ({
            theme:state.theme === themes.light ? themes.dark:themes.light
        }))
    }
    render(){
        const {theme} = this.state;
        const {toggleTheme} = this;
        return (
            <ThemeContext.Provider value={{theme,toggleTheme}}>
            </ThemeContext.Provider>
        )
    }
}
