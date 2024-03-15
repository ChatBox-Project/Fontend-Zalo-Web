
import React from "react";
import { ChatFooter, ChatHeader, Message } from "../Chat";
import { Box, Stack } from "@mui/material";

const Conversation = () =>{
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
            <ChatHeader />
       { /*header */}
            
        { /*msg */}
        <Box width="100%" sx={{ flexGrow:1, height:"100%", overflowY : "scroll"}}>
            <Message />
        </Box>
            <ChatFooter />
        { /*bot */}
        </Stack>
    )
}
export default Conversation;