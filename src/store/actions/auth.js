import * as actiontype from './actiontypes';
import Axios from 'axios';
import axios from './../../axios';

export const opensignpage = () =>{
    return {
        type: actiontype.OPEN_SIGNPAGE
    }
}

export const closesignpage = () =>{
    return {
        type: actiontype.CLOSE_SIGNPAGE
    }
}

export const authstart = () =>{
    return{
        type: actiontype.AUTH_START
    }
}

export const checkexpiration = (expirationtime) =>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(authlogout())
        }, expirationtime *1000);
    }
}

export const authlogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationdate')
    localStorage.removeItem('userid')
    return{
        type: actiontype.AUTH_LOGOUT
    }
}

export const setauth = (tokenid,userid, user) =>{
    return{
        type: actiontype.SET_AUTH,
        name: user.name,
        userid: userid,
        tokenid: tokenid
    }
}

export const authsuccess = (tokenid,userid, name, isSignUp) =>{
    return dispatch =>{
    if(isSignUp){
        const new_member ={
            name: name,
            userid: userid
        }
        axios.post('/users.json', new_member)
        dispatch(setauth(tokenid,userid,name))
    }
    axios.get('/users.json')
    .then(user=>{
        const users = [];
        for(let key in user.data){
            users.push(
                {...user.data[key],
                id: key}
            )
        }
        const mainuser = users.filter(user =>{
            return user.userid === userid
        })
        console.log(mainuser)
        dispatch(setauth(tokenid, userid, mainuser[0]))
        })
    } 
}

export const auth = (name, email, password, isSignUp) =>{
        return dispatch =>{
        dispatch(authstart())
        const authdata = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyATlGZ_LqG-Vt0sHpaB4PJTnrPeRkujg2U'
        if(!isSignUp){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATlGZ_LqG-Vt0sHpaB4PJTnrPeRkujg2U'
        }
        Axios.post(url, authdata)
        .then(user =>{
            console.log(user)
            const expirationdate = new Date(new Date().getTime() + user.data.expiresIn * 1000)
            localStorage.setItem('token', user.data.idToken)
            localStorage.setItem('expirationdate', expirationdate)
            localStorage.setItem('userid', user.data.localId)
            dispatch(authsuccess(user.data.idToken, user.data.localId,name,isSignUp))
            dispatch(checkexpiration(user.data.expiresIn))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export const authcheck = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token')
        const userid = localStorage.getItem('userid')
        const isSignUp= false
        const name= null
        if(!token){
            dispatch(authlogout())
        }else{
            const expirationdate = new Date(localStorage.getItem('expirationdate'))
            if(expirationdate <= new Date()){
                dispatch(authlogout())
            }else{
                dispatch(authsuccess(token,userid, name,isSignUp))
                dispatch(checkexpiration((expirationdate.getTime()-new Date().getTime())/1000))
            }
        }
    }
}