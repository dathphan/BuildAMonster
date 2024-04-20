class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.armLeftX = 250;
        this.armLeftY = 410;
        
        this.armRightX = 350;
        this.armRightY = 410;
        
        this.legLeftX = 260;
        this.legLeftY = 480;
        
        this.legRightX = 310;
        this.legRightY = 495;
        
        this.earLeftX = 250;
        this.earLeftY = 260;
        
        this.earRightX = 340;
        this.earRightY = 250;
        
        this.eyeX = 250;
        this.eyeY = 320;

        this.mouthX = 250;
        this.mouthY = 370;

        this.offsetX = 0;
        this.offsetY = 0;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        // Back Side
        my.sprite.leftArm = this.add.sprite(this.armLeftX + this.offsetX,this.armLeftY + this.offsetY, "monsterParts", "arm_whiteE.png");
        my.sprite.legLeft = this.add.sprite(this.legLeftX + this.offsetX,this.legLeftY + this.offsetY, "monsterParts", "leg_darkC.png");
        my.sprite.legLeft.flipX = true;
        my.sprite.leftEar = this.add.sprite(this.earLeftX + this.offsetX,this.earLeftY + this.offsetY, "monsterParts", "detail_white_ear.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.leftEar.scale = 1.5;

        // Body
        my.sprite.body = this.add.sprite(this.bodyX + this.offsetX, this.bodyY + this.offsetY, "monsterParts", "body_blueF.png");

        // Front
        my.sprite.legRight = this.add.sprite(this.legRightX + this.offsetX,this.legRightY + this.offsetY, "monsterParts", "leg_darkC.png");
        my.sprite.legRight.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.armRightX + this.offsetX,this.armRightY + this.offsetY, "monsterParts", "arm_whiteE.png");
        my.sprite.rightEar = this.add.sprite(this.earRightX + this.offsetX,this.earRightY + this.offsetY, "monsterParts", "detail_white_ear.png");
        my.sprite.rightEar.scale = 1.6

        // Face
        my.sprite.eye = this.add.sprite(this.eyeX + this.offsetX, this.eyeY + this.offsetY, "monsterParts", "eye_cute_light.png");
        my.sprite.mouth = this.add.sprite(this.mouthX + this.offsetX, this.mouthY + this.offsetY, "monsterParts", "mouthH.png");
        my.sprite.mouth.scale = 0.6;

        this.input.keyboard.on("keydown", function (event) {
            if (event.code == "KeyD") {
                for (const part in my.sprite){
                    my.sprite[part].x += 25
                }
            }
            else if (event.code == "KeyA") {
                for (const part in my.sprite){
                    my.sprite[part].x -= 25
                }
            }
            else if (event.code == "KeyS"){
                my.sprite.mouth.setFrame("mouthH.png");
            }
            else if (event.code == "KeyF"){
                my.sprite.mouth.setFrame("mouth_closed_fangs.png");
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        
    }

}
