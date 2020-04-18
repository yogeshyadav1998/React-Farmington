import React, { Component } from 'react';
import * as actiontype from './../actions/actiontypes';

const initialstate = {
    signpage: false,
    name: null,
    tokenid: null,
    userid: null,
    loading: false
}

const authreducer = (state=initialstate,action) =>{
    switch(action.type){
        case actiontype.OPEN_SIGNPAGE:
            return{
                ...state,
                signpage: true
            }
        case actiontype.CLOSE_SIGNPAGE:
            return{
                ...state,
                signpage: false
            }
        case actiontype.AUTH_START:
            return{
                loading:true
            }
        case actiontype.SET_AUTH:
            return{
                ...state,
                signpage: false,
                name: action.name,
                tokenid: action.tokenid,
                userid: action.userid,
                loading:false,
            }
        case actiontype.AUTH_LOGOUT:
            return{
                ...state,
                name:null,
                tokenid:null,
                userid:null
            }
        default:
            return state;
    }
}

export default authreducer;