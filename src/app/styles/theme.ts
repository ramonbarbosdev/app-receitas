import { DarkTheme as NavigationDark, DefaultTheme as NavigationLight, Theme } from '@react-navigation/native';

export interface CustomTheme extends Theme {
  colors: Theme['colors'] & {
    paragraph_extra: string;
    placeholder_extra: string;
    background_extra: string;
    button_extra: string;
    button_text: string;
    color_shadow: string;
    card_extra: string;
  };
}

export const lightTheme: CustomTheme = {
  ...NavigationLight,
  dark: false,
  colors: {
    ...NavigationLight.colors,
    background: '#f5f5f5',
    text: '#000',
    primary: '#6200ee',
    card: '#fff',
    border: '#ccc',
    notification: '#f50057',
    paragraph_extra: '#2a2a2a',  
    background_extra: '#eff0f3',  
    button_extra: '#ff8e3c',
    button_text: '#fffffe',
    color_shadow: '#000',
    card_extra: '#fff',
    placeholder_extra: '#2a2a2a',
  },
};

export const darkTheme: CustomTheme = {
  ...NavigationDark,
  dark: true,
  colors: {
    ...NavigationDark.colors,
    background: '#121212',
    text: '#fff',
    primary: '#bb86fc',
    card:  '#2a2a2a',
    border: '#333',
    notification: '#ff80ab',
    paragraph_extra: '#fffffe',  
    background_extra: '#1f1f1f' ,  
    button_extra: '#ff8e3c',
    button_text: '#fffffe',
    color_shadow: '#000',
    card_extra: '#2a2a2a',
    placeholder_extra: '#ccc',
  },
};
