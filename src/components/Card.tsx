import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import {Delete, FileCopy} from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        avatar: {
            backgroundColor: red[500],
        },
        contents: {
            height: 600,
            width: '100%',
            outline: 'none',
            border: 'none',
            resize: 'none',
            fontSize: 15,
        }
    }),
);

interface Props {
    isOriginal: boolean,
}

const Contents: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const [sentence, setSentence] = React.useState("");
    const [txtLength, setTxtLength] = React.useState(0);

    const onChangeTxt = (e: any) => {
        setTxtLength(e.target.value.length);
    }

    return (
        props.isOriginal ?
            <Card className={classes.root}>
                <CardHeader
                    title={
                        <Typography variant="overline" color="textSecondary" component="span">
                            글자 수 : {txtLength}
                        </Typography>
                    }
                    action={
                        <>
                            <Tooltip title="전체 복사" arrow>
                                <IconButton aria-label="copy">
                                    <FileCopy/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="삭제" arrow>
                                <IconButton aria-label="delete">
                                    <Delete/>
                                </IconButton>
                            </Tooltip>
                        </>
                    }
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="textarea" className={classes.contents}
                                onChange={onChangeTxt}/>
                </CardContent>
            </Card>
            :
            <Card className={classes.root}>
                <CardHeader
                    title={
                        <Typography variant="h6" color="textSecondary" component="span">
                            교정 내용
                        </Typography>
                    }
                    // avatar={
                    //     <Avatar aria-label="recipe" className={classes.avatar}>
                    //         R
                    //     </Avatar>
                    // }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    // subheader="오류 n 개"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            </Card>
    );
}

export default Contents;