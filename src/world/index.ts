
import * as THREE from 'three'

import dirt from '../textures/dirt.png'

export class World {



    scene: THREE.Scene
    camera: THREE.PerspectiveCamera

    chunkSize = 16

    chunk = new THREE.Vector2(0, 0)
    previousChunk = new THREE.Vector2(0, 0)


    blocks: any[] = []


    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
        this.scene = scene
        this.camera = camera
        
    }


    loadWorld() {
        // reset scene
        // for (const block of this.blocks) {
        //     this.scene.remove(block)
        // }
          this.blocks = []

          // load textures
          let loader = new THREE.TextureLoader()
          const dirtMaterial = loader.load(dirt)
          dirtMaterial.wrapS = THREE.RepeatWrapping;
dirtMaterial.wrapT = THREE.RepeatWrapping;
dirtMaterial.repeat.set(50,50); // Agrandar la textura
        //   dirtMaterial.magFilter = THREE.NearestFilter


          // create instance meshes
          const geometry = new THREE.BoxGeometry(1, 1, 1)

          const material =  new THREE.MeshBasicMaterial({ map: dirtMaterial });
          for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                console.log('GENERATE BLOCK:', i, j)
                const block = new THREE.Mesh(geometry, material);
                block.position.x = i - 7.5; // Alinea los bloques en X
                block.position.z = j - 7.5; // Alinea los bloques en Z
                this.blocks.push(block);
                this.scene.add(block)
            }
        }

        console.log(' SCENE', this.scene)

        
          //for (let i = 0; i < this.materialType.length; i++) {
            // let block = new THREE.InstancedMesh(
            //   geometry,
            //   new THREE.MeshStandardMaterial({ map: dirtMaterial }),
            //     1
            // )
            // block.position.x = 0
            // // block.position.y = 0
            // block.position.z = 0
            // // block.name = BlockType[i]
            // this.blocks.push(block)
            // this.scene.add(block)
          //}
    }
}