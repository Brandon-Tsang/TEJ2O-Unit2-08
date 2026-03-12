/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Mar 2026
 * This program will show LED colors.
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// initialize the pins
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

// turn on the LEDs
input.onButtonPressed(Button.A, function() {
    // turn on red
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString('Red')
    
    // turn off red
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // turn on green
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Green')
    
    // turn off green
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turn on blue
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Blue')
    
    // turn off blue
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turn on magenta
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Magenta')
    
    // turn off magenta
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turn on cyan
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Cyan')
    
    // turn off cyan
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turn on yellow
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Yellow')
    
    // turn off yellow
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turn on white
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('White')
    
    // turn off white
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
