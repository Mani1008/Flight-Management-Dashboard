"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QueryStats, SpaceDashboard } from '@mui/icons-material';
import LiveHelp from '@mui/icons-material/LiveHelp';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Work from '@mui/icons-material/Work';
import Mail from '@mui/icons-material/Mail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Report from '@mui/icons-material/Report';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';



const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    const { window } = props;
    const { children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isCollapse, setIsCollapse] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleCollapse = () => {
        if (!isClosing) {
            setIsCollapse(!isCollapse);
        }
    };

    const drawer = (
        <div>
            <Toolbar>
                <svg xmlns="http://www.w3.org/2000/svg" width="176" height="30" fill="none" viewBox="0 0 176 40"><path fill="#283841" fill-rule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clip-rule="evenodd"></path><path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
            </Toolbar>
            <Divider />
            <List>
                {['Dashboard', 'Analytics', 'Companies', 'Users','Add Reservation', 'Process Unit', 'Report'].map((text, index) => (
                    <ListItem key={text} disablePadding className={pathname.startsWith("/" + text.toLowerCase())? "text-sky-600 bg-slate-300": "text-slate-600"} onClick={() => router.push("/" + text.toLowerCase())}>
                        <ListItemButton>
                            <ListItemIcon className={pathname.startsWith("/" + text.toLowerCase())? "text-sky-600 bg-slate-300": "text-slate-600"}>
                                {index === 0 && <SpaceDashboard />}
                                {index === 1 && <PeopleAlt />}
                                {index === 2 && <QueryStats />}
                                {index === 3 && <PeopleAltIcon />}
                                {index === 4 && <Mail />}
                                {index === 5 && <Report />}
                                {index === 6 && <Work />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <ListItem disablePadding onClick={handleCollapse} className={pathname.startsWith("/More")? "text-sky-600 bg-slate-300": "text-slate-600"}>
                    <ListItemButton>
                        <ListItemIcon className={pathname.startsWith("/More")? "text-sky-600 bg-slate-300": "text-slate-600"}>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="More" />
                        {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <Collapse in={isCollapse} timeout="auto" unmountOnExit>
                <List className='ml-4'>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding className={pathname.startsWith("/More")? "text-sky-600 bg-slate-300": "text-slate-600"}>
                            <ListItemButton>
                                <ListItemIcon className={pathname.startsWith("/More")? "text-sky-600 bg-slate-300": "text-slate-600"}>
                                    {index === 0 && <InboxIcon />}
                                    {index === 1 && <InboxIcon />}
                                    {index === 2 && <InboxIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: 'rgb(0 183 126)',
                    color: '#ffffff'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <main>{children}</main>
                
            </Box>
        </Box>
    );
}

Layout.PropTypes = {
window:PropTypes.func,
children:PropTypes.array,};
