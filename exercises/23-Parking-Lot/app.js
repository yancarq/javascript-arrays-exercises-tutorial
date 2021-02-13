let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
console.log(getParkingLotState(parking_state));



function  getParkingLotState(parking_state){
    let state = {
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0,
    }

    for(let i = 0; i < parking_state.length;i++){
        for(let j=0; j < parking_state[i].length;j++){
            if(parking_state[i][j]==1){//ocupado
                state.occupiedSlots +=1;
            }else if(parking_state[i][j]==2) { //disponible
                state.availableSlots +=1;
            }
                
        }
    }

    state.totalSlots = state.occupiedSlots + state.availableSlots;

    return state;

}