import { createContext, useReducer } from "react"

export const DataContext = createContext()

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        graphdata: action.payload
      }
    case "CREATE_DATA":
      return {
        graphdata: [action.payload, ...state.graphdata]
      }
    case "DELETE_DATA":
      return {
        graphdata: state.graphdata.filter(g => g._id !== action.payload._id)
      }
    case "EDIT_DATA":
      let index = state.graphdata.findIndex(item => item._id === action.payload._id);
      if (index !== -1) {
        state.graphdata[index] = action.payload;
      }
      console.log(state.graphdata)
      return {
        graphdata: state.graphdata
      }
    default:
      return state
  }
}

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    graphdata: null
  })

  return (
    <DataContext.Provider value={{ ...state, dispatch }} >
      {children}
    </DataContext.Provider>
  )
}
// console.log(action.payload)