import * as types from "../constants/GamePlayConstants";

export const changeGamePlayState = (state) =>({
    state,
    type: types.CHANGE_GAME_PLAY
})