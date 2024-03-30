import React from "react";
import { Box, Badge, Stack, Avatar, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import styled from "@emotion/styled";

const StyledBadge = styled(Badge)(({theme})=>({
    '& .MuiBadge-badge':{
        backgroundColor: '#44b700',
        color : '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after':{
            position: 'absolute',
            top : 0,
            left: 0,
            width: '100%',
            height : '100%',
            borderRadius : '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border : '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple':{
        '0%':{
            transform:'scale(.8)',
            opacity: 1,
        },
        '100%':{
            transform:'scale(2.4)',
            opacity: 0,
        },
    },
}));
const ChatElement = ({ name , img , msg , time , unread , online}) =>{
    return (
        <Box sx={{
            width:"100%",
            borderRadius:1,
            backgroundColor: "#fff",
        }}
        p={2}>
        <Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <Stack direction="row" spacing={2}>
                {online ? <StyledBadge 
                 overlap="circular"
                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot">
                 <Avatar src={faker.image.avatar()} />
                </StyledBadge> : <Avatar src={faker.image.avatar()} />}
            <Stack spacing={0.4}>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography variant="caption">{msg}</Typography>
            </Stack>
            <Stack spacing={2} alignItems={'center'}>
                <Typography sx={{fontWeight: 600}} variant="caption">{time}</Typography>
                <Badge color='primary' badgeContent={unread}></Badge>
            </Stack>  
         </Stack>  
        </Stack>
        </Box>
    )
}

export default ChatElement;