let isSwitched = false
let force = 0
input.onButtonPressed(Button.A, function () {
    if (isSwitched) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
input.onButtonPressed(Button.B, function () {
    if (isSwitched) {
        basic.showString("B")
    } else {
        basic.showString("A")
    }
})
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    isSwitched = force > 100
})
