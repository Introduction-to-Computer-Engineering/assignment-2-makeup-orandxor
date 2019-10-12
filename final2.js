function compass () {
    // compass direction
    degrees = input.compassHeading()
    if (degrees > 45 && degrees < 315) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (degrees < 135) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
    } else if (degrees < 225) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # . # . #
            # # . # #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    // for reseting the selection menu since sometimes
    // starting at zero is better than incrementing or
    // decrmenting
    selection = 0
})
input.onButtonPressed(Button.A, function () {
    // incrementing the selection menu
    selection += 1
})
function selection_menu () {
    if (selection == 1) {
        compass()
    } else if (selection == 2) {
        magnetic_force()
    } else {
        selection = 0
    }
}
function magnetic_force () {
    // can be use to measure power line losses since
    // losses are to electromagnetic field also for my
    // self to measure my neodymium magnets
    mag_str = input.magneticForce(Dimension.X)
    basic.showNumber(mag_str)
}
input.onButtonPressed(Button.B, function () {
    // decremementing the selection menu
    selection += -1
})
function text_seletion_menu () {
    // for geting informative data on selections although
    // not very readable in a 5x5 led display
    basic.showString("menu press a and b to return to the menu at any time")
    basic.showString("1) compass mode")
    basic.showString("2) magnetic strength mode")
}
let mag_str = 0
let selection = 0
let degrees = 0
while (true) {
    selection_menu()
}
