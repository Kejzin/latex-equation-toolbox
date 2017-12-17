
const initialState = {
  latex: 'e=mc^{2}'
}

const actionTypes = {
  CHANGE_LATEX: 'input@changeLatex'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LATEX:
      return {
        ...state,
        latex: action.latex
      }
    default:
      return state
  }
}

export const actions = {
  changeLatex: (latex) => ({
    type: actionTypes.CHANGE_LATEX,
    latex
  })
}