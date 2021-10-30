import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import "./Message.css";

function Message({ message, username }) {
    const isUser = username === message.username;

    return (
        <div className={isUser ? 'message__user' : 'message'}>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography
                        variant="h5"
                        color="white"
                        component="h2"
                    >
                        {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>

        </div >
    )
}

export default Message
