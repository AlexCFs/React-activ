import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleClickToggleMenu(toggle) {
    this.setState({ open: toggle });
  }
  handleClickMenuItem(url) {
    this.handleClickToggleMenu(false);
    this.props.onClickMenuItem(url);
  }
  render() {
    return (
      <div>
        <Button
          id="basic-button"
          onClick={() => this.handleClickToggleMenu(true)}
        >
          Menu
        </Button>
        <Menu
          id="basic-menu"
          open={this.state.open}
          onClose={() => this.handleClickToggleMenu(false)}
        >
          <MenuItem onClick={() => this.handleClickMenuItem("/connection")}>
            Connexion
          </MenuItem>
          <MenuItem
            onClick={() => this.handleClickMenuItem("/listDepartments")}
          >
            Liste des departements
          </MenuItem>
          <MenuItem onClick={() => this.handleClickMenuItem("/shopping-list")}>
            Liste de course
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Home;
