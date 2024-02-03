import p5 from 'p5'
import { showFrameRate } from './helper'

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400)
    }

    p.draw = () => {
        p.background(0)
        
        // make spinning square
        p.push()
        p.translate(p.width / 2, p.height / 2)
        p.rotate(p.frameCount * 0.01)
        p.fill(255)
        p.rect(-100, -100, 200, 200)
        p.pop()

        showFrameRate(p)
    }
}

new p5(sketch)
