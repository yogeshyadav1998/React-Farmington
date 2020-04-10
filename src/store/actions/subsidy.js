import * as actiontype from './actiontypes';
import axios from './../../axios';

export const subsidyrequeststart = () =>{
    return{
        type: actiontype.SUBSIDY_REQUEST_START
    }
}

export const subsidyrequestsuccess =(id) =>{
    return{
        type: actiontype.SUBSIDY_REQUEST_SUCCESS,
        id: id
    }

}

export const subsidyrequestpost = (subsidyrequest) =>{
    return dispatch => {
        dispatch(subsidyrequeststart())
        axios.post('/subsidyrequest.json', subsidyrequest)
        .then(response =>{
            dispatch(subsidyrequestsuccess(response.id))
        })
    }
}

export const fetchsubsidyrequestsstart=()=>{
    return{
        type: actiontype.FETCH_SUBSIDY_REQUEST_START
    }
}

export const fetchsubsidyrequestssuccess=(fetchedrequests)=>{
    return{
        type: actiontype.FETCH_SUBSIDY_REQUEST_SUCCESS,
        requests: fetchedrequests
    }
}

export const fetchsubsidyrequests = () =>{
    return dispatch => {
        dispatch(fetchsubsidyrequestsstart())
        axios.get('/subsidyrequest.json')
        .then(response=>{
            const fetchedrequests =[];
            for(let key in response.data){
                fetchedrequests.push(
                    {...response.data[key],
                    id: key}
                )}
            setTimeout(()=>{
                dispatch(fetchsubsidyrequestssuccess(fetchedrequests))
            }, 1000)
        })
    }
}