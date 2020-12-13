import React from 'react'
import './Room.css'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Room() {
    return (
        <div className="room"> 

        <div className="room_search sticky">
            <div className="room_wrapper">
                <div className="search">
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                className="input"
                placeholder="Search Contacts"
                />
               
                </div>
            </div>
        </div>

           <div className="room_body">
               <div className="room_wrapper">
                   <div className="room_avatar">
                    <Avatar alt="Sreemanth" src="/static/images/avatar/1.jpg" />
                   </div>
                   <div className="room_content">
                        <div className="room_heading">
                            <div className="room_title"> 
                                <Typography variant="subtitle2" className="header-item-time"> Room 1</Typography>
                            </div>
                            <div className="room_timestamp">
                            <Typography variant="caption" className="header-item-time">17:00</Typography>
                            </div>
                        </div>
                        <div className="room_lastmsg">
                        <Typography variant="subtitle1" className="header-item-time"> newfewf</Typography> 
                        </div>
                   </div>
               </div>
           </div>
           <div className="room_body">
               <div className="room_wrapper">
                   <div className="room_avatar">
                    <Avatar alt="Sreemanth" src="/static/images/avatar/1.jpg" />
                   </div>
                   <div className="room_content">
                        <div className="room_heading">
                            <div className="room_title"> 
                                <Typography variant="subtitle2" className="header-item-time"> Room 1</Typography>
                            </div>
                            <div className="room_timestamp">
                            <Typography variant="caption" className="header-item-time">17:00</Typography>
                            </div>
                        </div>
                        <div className="room_lastmsg">
                        <Typography variant="subtitle1" className="header-item-time"> newfewf</Typography> 
                        </div>
                   </div>
               </div>
           </div>
           <div className="room_body">
               <div className="room_wrapper">
                   <div className="room_avatar">
                    <Avatar alt="Sreemanth" src="/static/images/avatar/1.jpg" />
                   </div>
                   <div className="room_content">
                        <div className="room_heading">
                            <div className="room_title"> 
                                <Typography variant="subtitle2" className="header-item-time"> Room 1</Typography>
                            </div>
                            <div className="room_timestamp">
                            <Typography variant="caption" className="header-item-time">17:00</Typography>
                            </div>
                        </div>
                        <div className="room_lastmsg">
                        <Typography variant="subtitle1" className="header-item-time"> newfewf</Typography> 
                        </div>
                   </div>
               </div>
           </div>
           <div className="room_body">
               <div className="room_wrapper">
                   <div className="room_avatar">
                    <Avatar alt="Sreemanth" src="/static/images/avatar/1.jpg" />
                   </div>
                   <div className="room_content">
                        <div className="room_heading">
                            <div className="room_title"> 
                                <Typography variant="subtitle2" className="header-item-time"> Room 1</Typography>
                            </div>
                            <div className="room_timestamp">
                            <Typography variant="caption" className="header-item-time">17:00</Typography>
                            </div>
                        </div>
                        <div className="room_lastmsg">
                        <Typography variant="subtitle1" className="header-item-time"> newfewf</Typography> 
                        </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
