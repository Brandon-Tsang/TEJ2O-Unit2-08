"""
Created by: Brandon
Created on: Feb 2026
This module is a Micro:bit MicroPython program
"""

from microbit import *
import time

# setup
display.clear
display.show(Image.HAPPY)

# initialize pins
pin13.write_digital(0)
pin14.write_digital(0)
pin15.write_digital(0)

# turn on the LEDs
while True:
    if button_a.is_pressed():
    
        # turn on red
        pin13.write_digital(1)
        display.scroll("Red")

        # turn off red
        time.sleep(1)
        pin13.write_digital(0)

        # turn on green
        pin14.write_digital(1)
        display.scroll("Green")

        # turn off green
        time.sleep(1)
        pin14.write_digital(0)

        # turn on blue
        pin15.write_digital(1)
        display.scroll("Blue")

        # turn off blue
        time.sleep(1)
        pin15.write_digital(0)

        # turn on magenta
        pin13.write_digital(1)
        pin15.write_digital(1)
        display.scroll("Magenta")

        # turn off magenta
        time.sleep(1)
        pin13.write_digital(0)
        pin15.write_digital(0)

        # turn on cyan
        pin14.write_digital(1)
        pin15.write_digital(1)
        display.scroll("Cyan")

        # turn off cyan
        time.sleep(1)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # turn on yellow
        pin13.write_digital(1)
        pin14.write_digital(1)
        display.scroll("Yellow")

        # turn off yellow
        time.sleep(1)
        pin13.write_digital(0)
        pin14.write_digital(0)

        # turn on white
        pin13.write_digital(1)
        pin14.write_digital(1)
        pin15.write_digital(1)
        display.scroll("White")

        # turn off white
        time.sleep(1)
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)
