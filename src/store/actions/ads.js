import * as actiontype from './actiontypes';
import axios from './../../axios';

export const postadstart=()=>{
    return {
        type: actiontype.POST_AD_START
    }
}

export const postadsuccess = ()=>{
    return{
        type: actiontype.POST_AD_SUCCESS
    }
}

export const postad = (productad) =>{
    return dispatch =>{
        dispatch(postadstart())
        axios.post('/productads.json', productad)
            .then(response =>{
                setTimeout(()=>{
                    dispatch(postadsuccess(response.id))
                },1000)
            }
        );
    }
}

export const fetchadsstart = ()=>{
    return{
        type: actiontype.FETCH_ADS_START
    }
}

export const fetchadssuccess = (fetchedads) => {
    console.log(fetchedads)
    return{
        
        type: actiontype.FETCH_ADS_SUCCESS,
        ads : fetchedads
    }
}

export const fetchads =() =>{
    return dispatch =>{
        dispatch(fetchadsstart())
        axios.get('/productads.json')
        .then(response=>{
            console.log(response)
            const fetchedads = [];
            for(let key in response.data){
                fetchedads.push(
                    {...response.data[key],
                    id: key}
                )}
            setTimeout(()=>{
                dispatch(fetchadssuccess(fetchedads))
            },1000)
           
        })
    }
}