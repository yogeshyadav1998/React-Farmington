import * as actiontype from './../actions/actiontypes';

const initialstate ={
    requests:[],
    loading:false
}

const subsidyreducer = (state = initialstate, action) =>{
        switch(action.type){
            case actiontype.SUBSIDY_REQUEST_START:
                return{
                    ...state,
                    loading: true
                }
            case actiontype.SUBSIDY_REQUEST_SUCCESS:
                return{
                    ...state,
                    loading: false
                }
            case actiontype.FETCH_SUBSIDY_REQUEST_START:
                return{
                    ...state,
                    loading: true
                }
            case actiontype.FETCH_SUBSIDY_REQUEST_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    requests: action.requests
                }
            default:
                return state;
        }
}

export default subsidyreducer;