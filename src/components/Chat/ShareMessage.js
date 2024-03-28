import {
  Box,
  Stack,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../../redux/slices/app";
import { faker } from "@faker-js/faker";
import { Shared_docs, Shared_links } from "../../data";
import { DocMsg, LinkMsg } from "./MsgType";
const ShareMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "350px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Kho lưu trữ</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Ảnh / Video" />
          <Tab label="Links" />
          <Tab label="Files" />
        </Tabs>
        {/* */}
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            flexGrow: "1",
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5,6,7,8].map((el) => {
                      return <Grid item xs={4}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>; 
                    })}
                  </Grid>
                );
              case 1:
                return Shared_links.map((el)=> <LinkMsg el={el} /> )
              case 2:
                return Shared_docs.map((el)=> <DocMsg el={el} /> )
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShareMessage;
