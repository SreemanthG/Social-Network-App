import './Profile.css'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Profile() {
    return (
        <div>
            <Container maxWidth="sm" className="container">
            
            <Card elevation={3}>
                <div className="prof_body">
                    <div className="prof_wrapper">
                        <div className="prof_avatar">
                            <Avatar alt="Sreemanth"  className="prof_avatar_img" src="/static/images/avatar/1.jpg" />           
                        </div>
                        <div className="prof-name">
                        <Typography variant="h5">Sreemanth Gourishetty</Typography>
                        </div>
                        <div className="prof_counts">
                            <div className="post_count count">
                                <div className="">
                                <Typography variant="body1" className="Bold" >Posts</Typography>

                                </div>
                                <div className="">
                                <Typography variant="body1" >123</Typography>
                                
                                </div>
                            </div>
                            <div className="followers count">
                                <div className="">
                                <Typography variant="body1" className="Bold" >Followers</Typography>
                        
                                </div>
                                <div className="">
                                <Typography variant="body1" >123</Typography>
                                 
                                </div>
                            </div>
                            <div className="following count">
                                <div className="">
                                <Typography variant="body1" className="Bold" >Following</Typography>
                                </div>
                                <div className="">
                                <Typography variant="body1" >123</Typography>

                                </div>
                            </div>    
                        </div>
                        <div className="prof_bio">
                            <Typography variant="body2" className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eveniet repellat id non, aliquid a dicta sed veritatis porro unde reprehenderit iusto, voluptates saepe fugit molestiae voluptas quia delectus. Autem.</Typography>   
                        </div>
                       
                        <div className="prof_follow_btn">
                            <Button variant="contained" color="primary">
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>

            </Card>
            </Container>
            
        </div>
    )
}
