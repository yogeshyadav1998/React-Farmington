import * as actiontype from '../actions/actiontypes';

const initialstate ={
    loading: false
}

const postadreducer = (state=initialstate,action) =>{
    switch(action.type){
        case actiontype.POST_AD_START:
            return{
                ...state,
                loading: true
            }
        case actiontype.POST_AD_SUCCESS:
            return{
                ...state,
                loading: false
            }
        default:
            return state 
    }
}

export default postadreducer;
