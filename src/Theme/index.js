import { createMuiTheme } from 'material-ui/styles'

export const makeTheme = () => {
  createMuiTheme({
    palette: {
      primary: {
        main: "#00FF00"
      },
    },
  })
}
