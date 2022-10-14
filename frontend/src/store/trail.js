const RECEIVE_TRAILS = 'trails/RECEIVE_TRAILS';
const RECEIVE_TRAIL = 'trails/RECEIVE_TRAIL';

const receiveTrails = (trails) => ({
    type: RECEIVE_TRAILS,
    trails
})

const receiveTrail = (trail) => ({
    type: RECEIVE_TRAIL,
    trail
})

export const getTrail = (trailId) => {
    // console.log('in get trail111111')
    return ({trails}) => (trails ? trails[trailId] : null);
}
export const getTrails = ({trails}) => {
    // console.log('in get trails')
    return (trails ? Object.values(trails) : []);
}

export const fetchTrails = () => async dispatch => {
    const response = await fetch("/api/trails");
    // debugger
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveTrails(data))
    }
}

export const fetchTrail = (trailId) => async dispatch => {
    const response = await fetch(`/api/trails/${trailId}`);
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveTrail(data));
    }
}

const trailsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_TRAILS:
            return {...state, ...action.trails};
        case RECEIVE_TRAIL:
            nextState[action.trail.id] = action.trail;
            return nextState;
        default:
            return state;
    }
}

export default trailsReducer;