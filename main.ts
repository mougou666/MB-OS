enum RadioMessage {
    message1 = 49434
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // 播放音乐
    if (软件 == 4) {
        music.stopAllSounds()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    }
})
// 左
input.onButtonPressed(Button.A, function () {
    if (菜单 != 0) {
        菜单 += -1
    }
    if (菜单 == 0) {
        菜单 = 1
    }
})
// 选取
input.onButtonPressed(Button.AB, function () {
    if (菜单 == 3) {
        菜单 = 100
        sudu = 600
        软件 = 3
        x = randint(0, 2)
        o = game.createSprite(2, 4)
        _1 = game.createSprite(x, 0)
        _2 = game.createSprite(x + 1, 0)
        _3 = game.createSprite(x + 2, 0)
        basic.pause(sudu)
    }
    if (菜单 == 2) {
        软件 = 2
    }
    if (菜单 == 1) {
        软件 = 1
        input.calibrateCompass()
        basic.showString("" + (input.compassHeading()))
    }
    if (菜单 == 4) {
        软件 = 4
        music.stopAllSounds()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
    }
    if (菜单 == 5) {
        软件 = 5
        radio.sendString("MB-OS")
    }
    if (菜单 == 6) {
        软件 = 6
        microIoT.microIoT_WIFI("ChinaNet-beSQaK", "eeeh7329")
    }
    if (菜单 == 7) {
        软件 = 7
        basic.showString("12:00")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hi")
})
// 右
input.onButtonPressed(Button.B, function () {
    if (菜单 != 8) {
        菜单 += 1
    }
    if (菜单 == 8) {
        菜单 = 7
    }
})
let o: game.LedSprite = null
let x = 0
let sudu = 0
let 软件 = 0
let 菜单 = 0
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
led.setBrightness(128)
let 音乐 = 0
菜单 = 114514
radio.setGroup(1)
// 躲砖块代码2
basic.forever(function () {
    if (软件 == 3) {
        if (input.acceleration(Dimension.X) > 200) {
            o.change(LedSpriteProperty.X, 1)
            basic.pause(200)
        }
        if (input.acceleration(Dimension.X) < -200) {
            o.change(LedSpriteProperty.X, -1)
            basic.pause(200)
        }
    }
})
// 开机动画
basic.forever(function () {
    if (菜单 == 114514) {
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 5000, 0, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # . # #
            . # # # .
            . . . . .
            `)
        菜单 = 1
    }
})
// 菜单
basic.forever(function () {
    if (菜单 == 1) {
        basic.showLeds(`
            # . # . .
            # # # . .
            # . # . .
            . . . # #
            . . . # .
            `)
    }
    if (菜单 == 2) {
        basic.showLeds(`
            . . # . #
            . # # . .
            # # # . #
            . # # . .
            . . # . #
            `)
    }
    if (菜单 == 3) {
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . # .
            . # # # #
            # . . # .
            `)
    }
    if (菜单 == 4) {
        basic.showIcon(IconNames.EighthNote)
    }
    if (菜单 == 5) {
        basic.showLeds(`
            . # # # #
            . # . . #
            . # # # #
            # . . . .
            . . . . #
            `)
    }
    if (菜单 == 6) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            . # . # .
            . . # . .
            `)
    }
    if (菜单 == 6) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            . # . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (菜单 == 2) {
        record.setMicGain(record.AudioLevels.Low)
        record.startRecording(record.BlockingState.Nonblocking)
        while (input.logoIsPressed()) {
            led.plotBarGraph(
            input.soundLevel(),
            255
            )
            basic.pause(5)
            music.stopAllSounds()
            basic.clearScreen()
        }
        record.playAudio(record.BlockingState.Blocking)
    }
})
// 躲砖块代码1
basic.forever(function () {
    if (软件 == 3) {
        _1.change(LedSpriteProperty.Y, 1)
        _2.change(LedSpriteProperty.Y, 1)
        _3.change(LedSpriteProperty.Y, 1)
        if (o.isTouching(_1)) {
            game.gameOver()
        }
        if (o.isTouching(_2)) {
            game.gameOver()
        }
        if (o.isTouching(_3)) {
            game.gameOver()
        }
        if (_1.get(LedSpriteProperty.Y) == 4) {
            x = randint(0, 2)
            _1.set(LedSpriteProperty.X, x)
            _2.set(LedSpriteProperty.X, x + 1)
            _3.set(LedSpriteProperty.X, x + 2)
            _1.set(LedSpriteProperty.Y, 0)
            _2.set(LedSpriteProperty.Y, 0)
            _3.set(LedSpriteProperty.Y, 0)
        }
        basic.pause(sudu)
    }
})
