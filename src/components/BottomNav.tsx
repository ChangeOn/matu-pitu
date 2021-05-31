import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
        width: '91%',
        backgroundColor: '#e0d5fc',
        margin: '15px 0 0 55px'
    },
});
interface checkProps {
    checkSpell: () => void,
}

const SimpleBottomNavigation: React.FC<checkProps> = (props: checkProps) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="검사시작"
                icon={<FavoriteIcon />}
                onClick={props.checkSpell}
            />
            <BottomNavigationAction label="초기화" icon={<RestoreIcon />} />
        </BottomNavigation>
    );
}

export default SimpleBottomNavigation;