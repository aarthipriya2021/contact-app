const initialState = [
    { id: 0, name: "Aarthi Priya", email: "email@email.com", phone: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
  ];
  
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };
export default contactReducer;



// const initialState = [
//     {
//         id:1,
//         name:'Aarthi',
//         number:1234567890,
//         email:'abc@gmail.com',
//     },
//     {
//         id:2,
//         name:'Priya',
//         number:5678892356,
//         email:'def@gmail.com',
//     },
//     {
//         id:3,
//         name:'Aarya',
//         number:9876543210,
//         email:'ghi@gmail.com',
//     }
// ]
// const contactReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_CONTACT":
//             state = [...state, action.payload];
//             return state;
        
//         default:
//             return state;
//     }
// }
// export default contactReducer;