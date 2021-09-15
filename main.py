def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P0, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if receivedString == "on":
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(10)
        pins.digital_write_pin(DigitalPin.P0, 0)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P0, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
