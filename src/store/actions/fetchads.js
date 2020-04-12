import * as actiontype from './actiontypes';
import axios from '../../axios';

export const fetchadstart = () =>{
    return {
        type: actiontype.FETCH_ADS_START
    }
}

export const fetchadsuccess = () =>{
    return {
        type: actiontype.FETCH_ADS_SUCCESS
    }
}

export const storeallads = (allads) =>{
    return{
        type: actiontype.STORE_ALL_ADS,
        allads: allads
    }
}

export const fetchallads = () =>{
    return dispatch =>{
        dispatch(fetchadstart())
        axios.get('/productads.json')
        .then(response=>{
            const fetchedads =[];
            for(let key in response.data){
                fetchedads.push(
                    {...response.data[key],
                    id: key}
                )
            }
        dispatch(storeallads(fetchedads))
        setTimeout(()=>{
            dispatch(fetchadsuccess())
        },1000)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export const fetchfruitads = () =>{
    return dispatch =>{
        dispatch(fetchadstart())
        axios.get('/productads.json')
        .then(response=>{
            const fetchedads =[];
            for(let key in response.data){
                fetchedads.push(
                    {...response.data[key],
                    id: key}
                )
            }
        const filteredads = fetchedads.filter(ad => {
            return ad.producttype === 'fruit'
        })
        dispatch(storeallads(filteredads))
        setTimeout(()=>{
            dispatch(fetchadsuccess())
        },1000)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export const fetchpulsesads = () =>{
    return dispatch =>{
        dispatch(fetchadstart())
        axios.get('/productads.json')
        .then(response=>{
            const fetchedads =[];
            for(let key in response.data){
                fetchedads.push(
                    {...response.data[key],
                    id: key}
                )
            }
         const filteredads = fetchedads.filter(ad => {
            return ad.producttype === 'pulses'
        })
        dispatch(storeallads(filteredads))
        setTimeout(()=>{
            dispatch(fetchadsuccess())
        },1000)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export const fetchgrainads = () =>{
    return dispatch =>{
        dispatch(fetchadstart())
        axios.get('/productads.json')
        .then(response=>{
            const fetchedads =[];
            for(let key in response.data){
                fetchedads.push(
                    {...response.data[key],
                    id: key}
                )
            }
         const filteredads = fetchedads.filter(ad => {
            return ad.producttype === 'grain'
        })
        dispatch(storeallads(filteredads))
        setTimeout(()=>{
            dispatch(fetchadsuccess())
        },1000)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export const fetchvegetableads = () =>{
    return dispatch =>{
        dispatch(fetchadstart())
        axios.get('/productads.json')
        .then(response=>{
            const fetchedads =[];
            for(let key in response.data){
                fetchedads.push(
                    {...response.data[key],
                    id: key}
                )
            }
         const filteredads = fetchedads.filter(ad => {
            return ad.producttype === 'vegetable'
        })
        dispatch(storeallads(filteredads))
        setTimeout(()=>{
            dispatch(fetchadsuccess())
        },1000)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
