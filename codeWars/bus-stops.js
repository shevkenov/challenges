var number_ = function(busStops){
    let passangers = 0
    for (let i = 0; i < busStops.length; i++) {
        const [getIn, getOff] = busStops[i]
        passangers += getIn;
        passangers -= getOff;
    }

    return passangers;
}

function _number(busStops){
    if(busStops.length === 1) return busStops[0][0] - busStops[0][1];

    return busStops[0][0] - busStops[0][1] + number(busStops.slice(1))
}

function number(busStops) {
    return busStops.reduce((acc, tuple) => {
        return acc + tuple[0] -tuple[1]
    },0)
}



console.log(number([[10,0],[3,5],[5,8]]))
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))