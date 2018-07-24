import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import ShopIcon from '@material-ui/icons/Shop';
import Link from "gatsby-link";

export const mailFolderListItems = (
  <div>
    <Link to="/">
    <ListItem button id="dashboardButton">
      <ListItemIcon id="dashboardButton">
        <InboxIcon id="dashboardButton"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" id="dashboardButton"/>
    </ListItem>
  </Link>
  <Link to="/Campaigns">
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Campaigns" />
    </ListItem>
  </Link>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Suggested Actions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Media" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ShopIcon />
      </ListItemIcon>
      <ListItemText primary="Bud Rewards" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShopIcon />
      </ListItemIcon>
      <ListItemText primary="FIFA World Cup 2018" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShopIcon />
      </ListItemIcon>
      <ListItemText primary="Busch Rewards" />
    </ListItem>
  </div>
);
