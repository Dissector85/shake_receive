input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "on") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
