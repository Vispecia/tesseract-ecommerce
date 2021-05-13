import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import '../css/signin.css'

import  {useAuth} from '../contexts/AuthContext'

function Signin() {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [isSignin,setIsSignIn] = useState(true)
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    const {signup,signin} = useAuth()
    
    const handleSignup = async (e)=>{
        e.preventDefault()

        try{
            setLoading(true)
            await signup(email,password)
            history.push('/home')
        }
        catch(err){
            console.log(err)
        }

        setLoading(false)
       
    }

    const handleSignin = async (e)=>{
        e.preventDefault()

        try{
            setLoading(true)
            await signin(email,password)
            history.push('/home')
        }
        catch(err){
            console.log(err)
        }

        setLoading(false)
    }


    return (
         <div className="signin">
            <div className="signin__branding">
                <LocalMallIcon style={{fontSize:'150px'}}/>
                <h1>Tesseract-Ecommerce</h1>
                <p>Online shopping for everybody everywhere.</p>
            </div>

            {
                isSignin ? 

                <div className="signin__card">
                <TextField 
                style={{margin:'15px auto',width:'70%'}}
                variant="outlined" 
                value={email}
                type="email"
                onChange={(e)=>setEmail(e.target.value)} 
                label="E-mail" required/>

                <TextField 
                style={{margin:'15px auto',width:'70%'}} 
                variant="outlined" 
                value={password} 
                type="password"
                onChange={(e)=>setPassword(e.target.value)} 
                label="Password" required/>

                <Button 
                onClick={(e)=>handleSignin(e)}
                disabled={loading}
                style={{margin:'15px auto',width:'70%',backgroundColor:'green',color:'white'}} 
                variant="contained">
                    Signin
                </Button>
                <p>Don't have an account? <Link to="/" onClick={()=>setIsSignIn(false)}>Signup here.</Link></p>
                </div>

                :

                <div className="signin__card">
                <TextField 
                style={{margin:'15px auto',width:'70%'}}
                variant="outlined" 
                value={email}
                type="email"
                onChange={(e)=>setEmail(e.target.value)} 
                label="E-mail" required/>

                <TextField 
                style={{margin:'15px auto',width:'70%'}} 
                variant="outlined" 
                value={password} 
                type="password"
                onChange={(e)=>setPassword(e.target.value)} 
                label="Password" required/>

                <Button 
                onClick={(e)=>handleSignup(e)}
                disabled={loading}
                style={{margin:'15px auto',width:'70%',backgroundColor:'green',color:'white'}} 
                variant="contained">
                    Signup
                </Button>
                <p>Already have an account? <Link to="/" onClick={()=>setIsSignIn(true)}>Signin here.</Link></p>
                </div>
            }
        </div>
    )
}

export default Signin
