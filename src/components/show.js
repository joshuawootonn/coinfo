import React from "react";
import NavContainer from "../containers/general/nav_container";
import CoinInfoContainer from "../containers/show/coin_info_container";
import CoinGraphContainer from "../containers/show/coin_graph_container";
import withStyles from "material-ui/styles/withStyles";

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 1100
  }
});

function Show(props) {
  const { classes } = props;
  return (
    <div>
      <NavContainer />
      <div className={classes.container}>
        <div className="grid-margin">
          <CoinGraphContainer params={props.match} />
        </div>
        <div className="grid-margin">
          <CoinInfoContainer params={props.match} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Show);
