let start = 0
let time = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    start = input.runningTime()
    for (let index = 0; index < 100; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    time = input.runningTime() - start
    basic.showNumber(Math.idiv(time, 1000))
})
