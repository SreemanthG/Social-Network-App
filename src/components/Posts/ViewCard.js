import React from 'react'
import './ViewCard.css'
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';

export default function ViewCard() {

    return (
        <div>
                <Card className="Postcard">
                    <Card>

                    
                    <AppBar position="static" color="primary">
                    <Toolbar>
                    <div className="header-item">
                    <Avatar alt="Sreemanth" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div className="header-item flex-col">
                        <Typography className="header-item-title">
                        Sreemanth
                        </Typography>
                        <Typography variant="caption" className="header-item-time">Time</Typography>
                    </div>

               
                    </Toolbar>
                    </AppBar>
                    <div className="post-message">
                    <Typography variant="body">
                        Hello
                    </Typography>
                    </div>
                   
                    <div className="post-reactions">
                    <div className="likes post-reaction-item">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <Badge badgeContent={4} color="secondary">
                    <FavoriteBorderOutlinedIcon /> 
                    </Badge>
                    </IconButton>
                    
                    </div>
                    <div className="comments post-reaction-item">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <Badge badgeContent={9} color="secondary">
                    <ChatBubbleOutlineOutlinedIcon />
                    </Badge>
                    </IconButton>
                    </div>
                    </div>
                    </Card>
                    <div className="header-commment">
                        <div className="comment-wrapper">
                            <div className="avatar">
                            <Avatar alt="Sreemanth" src="/static/images/avatar/1.jpg" />
                            </div>
                        <TextField id="standard-basic" className="comment-field" label="Add your comment" />
                        </div>
                    </div>
                    <div className="header-commment">
                        <div className="comment-wrapper">
                            <div className="avatar">
                            <Avatar alt="Reyna" src="/static/images/avatar/1.jpg" />
                            </div>
                        <Typography   className="comment-field"> hello</Typography>
                        </div>
                    </div>
                </Card >


        </div>
    )
}
