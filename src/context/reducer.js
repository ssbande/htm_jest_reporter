export const reducer = (state, action) => {
  switch (action.type) {
    case 'setNewConfig':
      return { ...state, config: action.payload }
    default:
      return state;
  }
}