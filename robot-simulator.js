module.exports = class Robot {

  execute(param) {
    let vars = param.split(" ")
    let counter = 0;
    let d = vars[2];
    let x = parseInt(vars[0]);
    let y = parseInt(vars[1]);
    let directions=vars[3];
    console.log(directions, directions.length)
    if(d==="EAST"){
        counter=1;
    }
    else if(d==="SOUTH"){
        counter=2;
    }
    else if(d==="WEST"){
        counter=3;
    }
    console.log("Counter",counter)
    console.log("d",d)
    console.log("x",x)
    console.log("y",y)
    console.log("directions",directions)
    //Using this too see if the direction for the bearing is a clockwise movement or anticlockwise one
    for (let i = 0; i < directions.length; i++) {
        console.log(directions[i])
        if(i===0){
            console.log("INITIATED FUNCTION")
        }
        if (param[0] == "\n") {
            return null;
        }
        else if (directions[i] == 'L') {
            counter--;
        }
        else if (directions[i] == 'R') {
            counter++;
        }
        console.log("counter update",counter)

        //If count is positive, then it means it is moving clockwise direction
      //   console.log(counter >=0)
        
        if (counter >= 0) {
          //   console.log("Counter more than zero")
          //   console.log(counter, counter%4)
            if (counter % 4 == 0) {
                d = "NORTH";
            }
            else if (counter % 4 == 1) {
                d = "EAST";
            }
            else if (counter % 4 == 2) {
                d = "SOUTH";
            }
            else if (counter % 4 == 3) {
                d = "WEST";
            }
        }

        //If count is negative that means the direction is anticlockwise
        if (counter < 0) {
            if (counter % 4 == 0)
                d = "NORTH";
            else if (counter % 4 == -1)
                d = "WEST";
            else if (counter % 4 == -2)
                d = "SOUTH";
            else if (counter % 4 == -3)
                d = "EAST";
        }
        console.log("d update",d)
        if(directions[i]==="A"){
            if (d==="NORTH"){
                console.log(d)
                y+=1
            }
            else if (d==="SOUTH"){
                y-=1
            }
            else if (d==="EAST"){
                x+=1
            }
            else if (d==="WEST"){
                x-=1
            }
        }
        console.log("coordinate update",x,y)
    }


    return `${x} ${y} ${d}`
}

// console.log(robotSimulator("LLRAA"));

}
