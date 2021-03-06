import CoinTable from "../../components/index/coin_table";
import React from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import AlertDialog from '../../components/general/alert_dialog';
class CoinTableContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: "asc",
      orderBy: "market_cap_usd",
      selected: {},
      page: 0,
      rowsPerPage: 10
    };
  }
  componentDidMount(){
    if(this.props.coins == null || this.props.coins.length === 0){
      this.props.fetchCoinList();
    }
  }
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";
    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }
    this.props.sortCoinList(order, orderBy);

    this.setState({ order, orderBy });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  handleClick = () => {
    this.props.toggleAlert();
    //this.props.fetchCoinList();
  }
  render() {
    return (
      <div>
      <CoinTable
        classes={this.props.classes}
        data={this.props.coins}
        order={this.state.order}
        orderBy={this.state.orderBy}
        selected={this.state.selected}
        rowsPerPage={this.state.rowsPerPage}
        page={this.state.page}
        handleRequestSort={this.handleRequestSort}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
      <AlertDialog handleClick={this.handleClick} render={this.props.alert}/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins,
    alert: state.alert
  };
};
export default connect(mapStateToProps, actions)(CoinTableContainer);
