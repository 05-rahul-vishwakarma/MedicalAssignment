"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';  // Services Icon
import ArticleIcon from '@mui/icons-material/Article';  // Blog Icon
import InfoIcon from '@mui/icons-material/Info';  // About Us Icon
import { MailIcon } from 'lucide-react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { FontSizeIcon } from '@radix-ui/react-icons';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Service', 'Blog', 'About-us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* Replace with appropriate icons */}
                {text === 'Home' && <HomeIcon />}
                {text === 'Service' && <BuildIcon />}
                {text === 'Blog' && <ArticleIcon />}
                {text === 'About-us' && <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuOpenIcon style={{fontSize:"2.5rem",color:"teal"}} /></Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
