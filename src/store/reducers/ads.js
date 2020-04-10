import * as actiontype from './../actions/actiontypes';

const initialstate ={
    productads: [],
    loading: false
}

const adsreducer = ( state = initialstate, action) =>{
    switch(actiontype){
        case actiontype.POST_AD_START:
            return{
                ...state,
                loading: true
            }
        case actiontype.POST_AD_SUCCESS:
            return{
                ...state,
                loading:false
            }
        case actiontype.FETCH_ADS_START:
            return{
                ...state,
                loading: true
            }
        case actiontype.FETCH_ADS_SUCCESS:
            return{
                ...state,
                loading: false,
                productads: action.ads
            }
        default: 
            return state
    }
}

export default adsreducer;