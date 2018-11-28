import {createStore} from 'redux';
const reducer = (state,action) => {
    switch(action.type){
        case "Add":
        state = state + action.payload;
        break;
        case "Sub":
        break;
    }
    return state;

};
const store = createStore(reducer,1);
store.subscribe(() => {
    alert("State is" + store.getState());
});

store.dispatch(
{
    type: "Add",
    payload: 10
});
