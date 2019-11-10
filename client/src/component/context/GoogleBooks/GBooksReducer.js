import {SEARCH_BOOKS,CLEAR} from '../types'


export default (state,action)=>{
    switch(action.type){
        case SEARCH_BOOKS:
            return{
                ...state,
                books:action.payload
            }
            case CLEAR:
                return{
                    ...state,
                    books:[]
                }
        default:
            return state;
    }
}