import React from 'react'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paperMain: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  paperLight: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
  paperDark: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
  },
  paperSecMain: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  paperSecLight: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
  },
  paperSecDark: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
  },
})

class Box extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paperMain}>Primary Main</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paperLight}>Primary Light </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paperDark}>Primary Dark</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paperSecMain}>Secondary Main</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paperSecLight}>Secondary Light</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paperSecDark}>Secondary Dark</Paper>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(Box)
