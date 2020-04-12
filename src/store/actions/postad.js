import * as actiontype from './actiontypes';
import axios from './../../axios';

export const postadstart = () =>{
    return{
        type: actiontype.POST_AD_START
    }
}

export const postadsuccess = (id) =>{
    return{
        type: actiontype.POST_AD_SUCCESS,
        id: id
    }
}

export const postad = (productad) =>{
    return dispatch =>{
        dispatch(postadstart())
        axios.post('/productads.json', productad)
        .then(reponse =>{
            dispatch(postadsuccess(reponse.id))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}