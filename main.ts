makerbit.onMp3PlaybackCompleted(() => {
    basic.showIcon(IconNames.QuarterNote)
})
input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.EigthNote)
    makerbit.clearLcd()
    makerbit.showStringOnLcd("MP3 Mission", makerbit.position(makerbit.LcdPosition.P0))
    makerbit.playMp3Folder(3, makerbit.Play.Once)
})
input.onButtonPressed(Button.B, () => {
    basic.showIcon(IconNames.Heart)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
makerbit.connectLcd(39)
makerbit.showStringOnLcd("MakerBit........with backlight", makerbit.position(makerbit.LcdPosition.P0))
basic.pause(500)
makerbit.setLcdBacklight(makerbit.LcdBacklight.Off)
makerbit.clearLcd()
makerbit.showStringOnLcd("Backlight off", makerbit.position(makerbit.LcdPosition.P16))
basic.showIcon(IconNames.EigthNote)
makerbit.clearLcd()
makerbit.showStringOnLcd("MP3 Functional", makerbit.position(makerbit.LcdPosition.P0))
makerbit.connectSerialMp3(
makerbit.Pin.A0,
makerbit.Pin.A1
)
makerbit.playMp3TrackFromFolder(1, 1, makerbit.Play.Once)
basic.forever(() => {
	
})
