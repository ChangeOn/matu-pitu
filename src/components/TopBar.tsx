import * as React from "react";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

interface Props {
    window?: () => Window;
}

const HideOnScroll:React.FC<Props> = (props: Props) => {
    const { window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">Scroll to Hide App Bar</Typography>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}

export default HideOnScroll;