import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/Chat/Contact";
import { useSelector } from "react-redux";
import ShareMessage from "../../components/Chat/ShareMessage";

const GeneralApp = () => {
  const { sidebar } = useSelector((store) => store.app);
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 780px )" : "calc(100vw - 420px )",
          backgroundColor: "#F0F4FA ",
        }}
      >
        <Conversation />
      </Box>
      {sidebar.open && (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              break;
            case "SHARED":
              return <ShareMessage/>;
            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
