import Scroller from "./scroller.js";

function Main() {
    this.app = new PIXI.Application(true, 512, 384);
    document.body.appendChild(this.app.view);
    this.app.view.width = 512;
    this.app.view.height = 384;
    this.app.renderer.backgroundColor = 0x87ceeb;
    this.scroller = new Scroller(this.app.stage);
    requestAnimationFrame(this.update.bind(this));

    this.app.stop();
    this.app.loader.add("spritesheet", "resources/sprites/heli.json").load(onAssetsLoaded.bind(this));
}

function onAssetsLoaded() {
    // create an array to store the textures
    const heliTextures = [];
    let i;
    for (i = 0; i < 7; i++) {
        const texture = PIXI.Texture.from(`helicopter_${i + 1}.png`);
        heliTextures.push(texture);
    }

    const heli = new PIXI.AnimatedSprite(heliTextures);

    heli.x = 100;
    heli.y = 100;
    heli.anchor.set(0.5);
    heli.rotation = 0;
    heli.scale.set(1);
    heli.gotoAndPlay(0);
    this.app.stage.addChild(heli);
    this.app.start();
}

Main.SCROLL_SPEED = 5;
Main.prototype.update = function() {
    this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
    this.app.renderer.render(this.app.stage);
    requestAnimationFrame(this.update.bind(this));
};

new Main();
