export default function HeliManager(app) {
    // create an array to store the textures
    const heliTextures = [];
    let i;
    for (i = 0; i < 7; i++) {
        const texture = PIXI.Texture.from(`helicopter_${i + 1}.png`);
        heliTextures.push(texture);
    }
    this.heli = new PIXI.AnimatedSprite(heliTextures);

    // sets basic heli data
    this.heli.anchor.set(0.5);
    this.heli.rotation = 0;
    this.heli.scale.set(1);
    this.heli.x = 100;
    this.heli.y = 100;
    this.heli.gotoAndPlay(0);

    this.heli.interactive = true;
    this.heli.buttonMode = true;
    this.heli
        .on("mousedown", onDragStart)
        .on("touchstart", onDragStart)
        .on("mouseup", onDragEnd)
        .on("mouseupoutside", onDragEnd)
        .on("touchend", onDragEnd)
        .on("touchendoutside", onDragEnd)
        .on("mousemove", onDragMove)
        .on("touchmove", onDragMove);

    app.stage.addChild(this.heli);
}

/**
 * Store a reference to the data, the reason for this is because of multitouch, we want to track the movement of this particular touch
 * @param {*} event
 */
function onDragStart(event) {
    this.data = event.data;
    this.dragging = true;
}

/**
 * set the interaction data to null
 */
function onDragEnd() {
    this.dragging = false;
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}
