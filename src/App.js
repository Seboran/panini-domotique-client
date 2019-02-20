import React, { Component } from "react";
import "./App.css";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0
    };
  }

  handleChange = event => {
    this.setState({ minutes: event.target.value });
  };

  submitShutdown = event => {
    event.preventDefault();
    setTimeout(
      () => fetch("http://192.168.0.12:1203/shutdown"),
      this.state.minutes * 60 * 1000
    );
    console.log("yolo");
  };

  render() {
    const { minutes } = this.state;
    const { classes } = this.props;
    return (
      <div className="App">
        <header>
          <Typography variant="h3">Panini domotique</Typography>
        </header>
        <content>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="standard-number"
              label="Minutes avant extinction"
              value={minutes}
              onChange={this.handleChange}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.submitShutdown}
            >
              Eteindre
            </Button>
          </form>
        </content>
      </div>
    );
  }
}

export default withStyles(styles)(App);
