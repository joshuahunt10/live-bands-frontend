import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { MuiThemeProvider } from "material-ui/styles";
import CssBaseline from "material-ui/CssBaseline";
import { makeTheme } from "../src/Theme";

const theme = makeTheme();

function loadStories() {
  require('../src/stories');
}

addDecorator(story => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </MuiThemeProvider>
));

configure(loadStories, module);
