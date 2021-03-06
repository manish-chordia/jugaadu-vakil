import vakils from '../vakils'

const init_state = {
    vakils: vakils
};

const GET_VAKILS = 'GET_VAKILS'

export const getVakilProfile = (vakils, filter) => {
    return vakils.find(vakil => {
        return vakil.profileLink === filter
    })
};

export default (state = init_state, action) => {
    switch(action.type) {
        case GET_VAKILS:
            return state;
        default:
            return state;
    }
};