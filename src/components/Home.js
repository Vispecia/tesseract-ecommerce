import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import SearchBar from './SearchBar';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useAuth} from '../contexts/AuthContext'
import { useHistory } from 'react-router';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={index}
        {...other}>
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


function Home() {

    const [value,setValue] = useState(0)
    const {currentUser,logout} = useAuth()
    const history = useHistory()

    const handleLogout = async ()=>{
      try{
            await logout()
            history.pushState('/')
        }catch(err){
          console.log(err)
        }
    }
        

    return (

      currentUser ?
        <div>
            <AppBar position="static" style={{backgroundColor:'#063970',height:'60px'}}>
                <Tabs indicatorColor="none" value={value} onChange={(e,v)=>setValue(v)}>
                <Tab label="Home"  />
                <Tab label="Wishlist" />
                <Tab label="Cart" />                
                <Tab label="LogOut" onClick={()=>handleLogout()}/>                
                </Tabs>
                
            </AppBar>
            <TabPanel value={value} index={0}>
                <SearchBar/>   
                <strong>Welcome { currentUser.email }</strong>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{textAlign:'center'}}>
                    <AnnouncementIcon style={{fontSize:'300px'}}/>
                    <h1>NO PRODUCTS FOUND</h1>
                </div>                
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div style={{textAlign:'center'}}>
                    <ShoppingCartIcon style={{fontSize:'300px'}}/>
                    <h1>EMPTY CART</h1>
                </div>
            </TabPanel>
        </div>
        :
        <div>
        {
          history.push('/')
        }
        </div>
    )
}

export default Home
