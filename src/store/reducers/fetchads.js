import * as actiontype from './../actions/actiontypes';
import Item from 'antd/lib/list/Item';

const initialstate = {
    productads: [],
    loading: false
}

const fetchadsreducer = ( state = initialstate,action) =>{
    switch(action.type){
        case actiontype.FETCH_ADS_START:
            return {
                ...state,
                loading: true
            }
        case actiontype.STORE_ALL_ADS:
            return{
                ...state,
                productads: action.allads
            }
        case actiontype.FETCH_ADS_SUCCESS:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}

export default fetchadsreducer;