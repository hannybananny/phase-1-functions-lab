// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    if (pickUp > 42)
        return pickUp - 42
    else if (pickUp < 42)
        return 42 - pickUp 
};

function distanceFromHqInFeet(pickUp) {
    const blockToFeet = (distanceFromHqInBlocks(pickUp)* 264)
    return blockToFeet
}

function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock > endBlock)
    return ((startBlock - endBlock)*264)
    else if (startBlock < endBlock)
    return ((endBlock-startBlock)*264)
}
function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock)
    if (distance <= 400)
    return 0
    else if (distance >400 && distance <=2000)
    return ((distance-400) * .02)
    else if (distance > 2000 && distance <=2500)
    return 25
    else if (distance > 2500)
    return 'cannot travel that far'
}