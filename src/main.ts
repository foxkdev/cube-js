import Game from './game'
import { World } from './world'


const game = new Game()

const camera = game.camera
const scene = game.scene
const renderer = game.renderer


const world = new World(scene, camera)
world.loadWorld()

world.camera.position.y = 40


;(function animate() {
  // let p1 = performance.now()
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
  // console.log(performance.now()-p1)
})()

