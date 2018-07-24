import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './../utils/tileData';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';

const drawerWidth = 240;



const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  textField: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  },
  menu: {
  width: drawerWidth - 60
  },
  menuTitle: {
    textAlign: "left",
    marginLeft: 20,
    marginTop: 20
  }
});

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      content: 'none'
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    if (e.target.id == "dashboardButton") {
      this.setState({
        content: "dashboard"
      })
    }
    debugger
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap className={classes.menu}>
              Menu
            </Typography>

          {/* search bar start */}
          <TextField
            className={classes.textField}
            placeholder="Search"
            margin="normal"
          />
          {/* searh bar end */}
        </Toolbar>
      </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List onClick={this.handleClick}>{mailFolderListItems}</List>
          <Divider />
          <Typography variant="caption" className={classes.menuTitle}>{'My Campaigns'}</Typography>
          <List>{otherMailFolderListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>
            {this.props.children()}
          </Typography>
        </main>
      </div>
  );
}
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
