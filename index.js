function superbowlWin(record) {
    const result = record.find(game => game.result === "W")
    console.log(result)
    if(result === undefined) {
        return undefined
    } else {return result.year}
}
