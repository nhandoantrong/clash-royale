import * as types from "../constants/GamePlayConstants";

const initialState = {
    yourTeam : {},
    enemyTeam :{},
}

const gamePlayReducer = (state=initialState, action) =>{
    switch (action.type){
        case types.CHANGE_GAME_PLAY :
            state.yourTeam={...action.state.yourTeam};
            state.enemyTeam={...action.state.enemyTeam};
            
            return state ={...state};

        default: 
            return state;
    }
}

export default gamePlayReducer;