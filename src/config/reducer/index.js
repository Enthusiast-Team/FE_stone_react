const initializeApp={
    popup: false,
    isLogin:false,
    isLoading: false,
    user: {},

  }
  
  const reducer = (state=  initializeApp, action)=>{
      try{
     
      if (action.type === 'CHANGE_POPUP') {
        return{
          ...state,
          popup:action.value
        }
      }
      if (action.type === 'CHANGE_ISLOGIN') {
        return{
          ...state,
          isLogin:action.value
        }
      }
      if (action.type === 'CHANGE_ISLOADING') {
        return{
          ...state,
          user:action.value
        }
      }
      if (action.type === 'CHANGE_USER') {
        return{
          ...state,
          user:action.value
        }
    }
      return state;
    }catch(error){
      console.log(error);
    }
  }
    export default reducer;