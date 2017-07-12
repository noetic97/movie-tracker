const testData = (state = '', action) => {
  switch (action.type) {
    case 'LOG_BANG':
      return action.text
      break;
    default:
      return state;
  }
}

export default testData;
