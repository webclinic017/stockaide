import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/Navbar";

const styles = ({ background, palette, divider }) => ({
  appHeader: {
    background: background.appBars
  },
  appHeaderLeft: {
    width: "20%",
    borderWidth: "0 1px 0 0",
    borderStyle: "solid",
    borderColor: divider.primary
  },
  appHeaderRight: {
    width: "80%"
  },
  headerHeight: {
    flexGrow: 0.7
  }
});

const AppHeader = props => {
  const { classes, hidden } = props;

  if (hidden) return null;

  return (
    <Grid
      container
      primary
      className={classes.appHeader}
      classes={{ container: classes.headerHeight }}
      justify="space-between"
      alignItems="center"
    >
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        class={classes.appHeaderLeft}
      >
        <Grid container item justify="center">
          <Typography variant="title">Stock Aide</Typography>
        </Grid>
      </Grid>
      <Grid container item justify="center" class={classes.appHeaderRight}>
        <Navbar />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AppHeader);
AppHeader.propTypes = {
  hidden: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};
AppHeader.defaultProps = {
  hidden: false
};
