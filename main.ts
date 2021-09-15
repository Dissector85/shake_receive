radio.onReceivedString(function (receivedString) {
    if (receivedString == "on") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Heart)
        control.waitMicros(4)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
