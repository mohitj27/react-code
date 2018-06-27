export default function(state = null,action){
  console.log('action',action.payLoad)
    switch(action.type){
        case 'MOVIES_LIST' :
          return action.payLoad;
        default : 
          return state;  
    }
}