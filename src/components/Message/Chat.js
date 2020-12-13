import React from 'react'
import './Chat.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';

import Avatar from '@material-ui/core/Avatar';
export default function Chat() {
    return (
        <div className="chat">
            <div className="chat_body"> 
                <div className="chat_header">
                <AppBar position="static" color="none" className="appbar" elevation={0}>
                <Toolbar>
                    
                    <div className="chat_avatar">
                    <Avatar alt="Sreemanth" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div className="chat_header_content">
                    <div className="chat_title">
                    <Typography variant="h6">
                         News
                    </Typography>
                    </div>
                    <div className="chat_icons">
                        <IconButton aria-label="search">
                           <SearchIcon />
                       </IconButton>   
                    </div>
                    </div>
               
                </Toolbar>
                </AppBar>
                </div>


                <div className="chat_messages">
                <br />
                <Container>
                    <div className="messages_body">
                        <div className="message1">
                                <div className="message_content  message_rec">
                                    <div className="message_text">
                                    <Typography variant="body1" className="header-item-time">This is my message</Typography>
                                    </div>
                                    <div className="message_time">
                                      <Typography variant="caption " className="header-item-time">17:00</Typography>

                                    </div>
                                </div>  
                        </div>
                        <div className="message1">
                                <div className="message_content  message_sent">
                                    <div className="message_text">
                                    <Typography variant="body1" className="header-item-time">This is my message</Typography>
                                    </div>
                                    <div className="message_time">
                                      <Typography variant="caption " className="header-item-time">17:00</Typography>

                                    </div>
                                </div>  
                        </div>
                        <div className="message1">
                                <div className="message_content  message_sent">
                                    <div className="message_text">
                                    <Typography variant="body1" className="header-item-time">This is my message</Typography>
                                    </div>
                                    <div className="message_time">
                                      <Typography variant="caption " className="header-item-time">17:00</Typography>

                                    </div>
                                </div>  
                        </div>
                        <div className="message1">
                                <div className="message_content  message_sent">
                                    <div className="message_text">
                                    <Typography variant="body1" className="header-item-time">This is my message</Typography>
                                    </div>
                                    <div className="message_time">
                                      <Typography variant="caption " className="header-item-time">17:00</Typography>

                                    </div>
                                </div>  
                        </div>
                    </div>
                 
                </Container>
                
                </div>


                <div className="chat_footer">
                <AppBar position="static" color="none" className="appbar" elevation={0}>
                <Toolbar>
                    <div className="footer_flex">
                    <div className="chat_avatar">
                    <IconButton aria-label="search">
                           <InsertEmoticonIcon />
                    </IconButton>   
                    <IconButton aria-label="search">
                           <AttachFileIcon />
                    </IconButton>   
                    </div>
                    
                    <div className="chat_message_input">
                    <InputBase
                    placeholder="Type a message"
                    className="message_inputs"
                    />
                    </div>
                    <div className="chat_message_send">
                    <IconButton aria-label="search">
                           <SendIcon color="secondary" />
                    </IconButton>   
                    </div>
                    </div>
                  
                </Toolbar>
                </AppBar>
                </div>
            </div>
        </div>
    )
}