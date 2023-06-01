radio.onReceivedNumber(function (receivedNumber) {
    let recivedNumber = 0
    Alarm = 0
    if (recivedNumber == 1) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(0)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(0)
})
let Alarm = 0
radio.setGroup(0)
