import { Avatar, Box, Button, Divider, IconButton, Stack, Typography , Dialog , DialogActions , DialogContent , DialogContentText ,
 Slide   } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {BellRinging, CaretDown, PushPin, UserPlus, X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../../redux/slices/app";
import { faker } from "@faker-js/faker";


const Transition = React.forwardRef(function Transition(props ,ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})
const BlockDialog = ({open,handleClose}) =>{
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Bạn muốn chặn người này
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Đồng Ý</Button>
      <Button onClick={handleClose}>Từ Chối</Button>
    </DialogActions>
  </Dialog>
  )
}
const DeleteDialog = ({open,handleClose}) =>{
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
         Xóa bạn bè
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Đồng Ý</Button>
      <Button onClick={handleClose}>Từ Chối</Button>
    </DialogActions>
  </Dialog>
  )
}

const Contact = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseBlock = () =>{
    setOpenBlock(false);
  }
  const handleCloseDelete = () =>{
    setOpenDelete(false);
  }
  return (
    <Box sx={{ width: "360px"}}>
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
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
          {/* body */}
            
        </Box>
        <Stack
            sx={{
              width:'100%',
              height: "100%",
              position: "relative",
              flexGrow: "1",
              overflowY: "scroll",
            }}
            p={3}
            spacing={3}
          >
            <Stack alignItems={"center"} direction={"row"} spacing={2}>
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
                sx={{ height: 64, width: 64 }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article" fontWeight={600}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2" fontWeight={400}>
                  {"+0387097651"}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Stack spacing={1} alignItems={"center"}>
                <IconButton>
                  <BellRinging />
                </IconButton>
                <Typography variant="overline">Tắt thông báo</Typography>
              </Stack>
              <Stack spacing={1} alignItems={"center"}>
                <IconButton>
                  <PushPin />
                </IconButton>
                <Typography variant="overline">Ghim hội thoại</Typography>
              </Stack>
              <Stack spacing={1} alignItems={"center"}>
                <IconButton>
                  <UserPlus />
                </IconButton>
                <Typography variant="overline">Tạo Nhóm</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack sx={{width:'100%'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography>Ảnh / Video</Typography>
                <IconButton>
                  <CaretDown />
                </IconButton>
            </Stack>
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                {[1,2,3].map((el)=>(
                  <Box>
                    <img src={faker.image.food()} alt={faker.name.fullName()}/>
                  </Box>
                ))}
            </Stack>
            <Button onClick={()=>{
              dispatch(UpdateSidebarType("SHARED"))
            }} fullWidth> Xem Tất Cả</Button>
            <Divider />
            <Stack direction="row" alignItems={'center'} spacing={2}>
                <Button onClick={()=>{setOpenDelete(true)}} fullWidth variant="outlined">
                  Xóa bạn bè
                </Button>
                <Button onClick={()=>{ setOpenBlock(true)}} fullWidth variant="outlined">
                  Chặn
                </Button>
            </Stack>    
            </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock}/>}
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete}/>}
    </Box>
  );
};
export default Contact;
