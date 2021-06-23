export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

const ContactReducer = (state, action) => {

    switch (action.type) {

        case ADD_CONTACT:
            return [
                ...state, {

                }
            ];

        case EDIT_CONTACT:
            return [];

        case DELETE_CONTACT:
            return state.filter(con => con.id !== action.id);

        default:
            return state;
    }
    
};

export default ContactReducer;