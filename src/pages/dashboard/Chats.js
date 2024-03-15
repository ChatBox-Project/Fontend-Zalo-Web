import { Avatar, Badge, Box, InputBase, Stack, Typography,} from "@mui/material";
import React from "react";
import { styled , alpha } from "@mui/material";
import { MagnifyingGlass  } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";

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
            width:"99%",
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
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 10,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: "90%",
    border:'1px solid black',
  }));
const SearchIconWrapper = styled("div")(({theme})=>({
    padding : theme.spacing(0,2),
    height:"100%",
    position:"absolute",
    pointerEvents:"none",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
const Chats = () => {
    return (
        <Box sx={{position:"relative" , width:320, backgroundColor:'gray', boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",}}>
            <Stack p={3} spacing={2} sx={{height:'100vh'}}>
             <Stack sx={{ width: "100%"}}>
                <Search>
                    <SearchIconWrapper>
                        <MagnifyingGlass color="#709CE6" />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
            </Stack>
            <Stack direction="column" sx={{flexGrow:1 , overflowY:'scroll', height:"100%"}}>
                <Stack spacing={3}>
         
                {ChatList.filter((el)=>el).map((el)=>{
                    return <ChatElement {...el}/>
                })}
                </Stack>
            </Stack>
            </Stack> 
        </Box>
        
    )
}
export default Chats;