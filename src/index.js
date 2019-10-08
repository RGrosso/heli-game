import Scroller from "./scroller.js";
import HeliManager from "./heli-manager.js";

function Main() {
    this.app = new PIXI.Application(512, 384);
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
    this.heli = new HeliManager(this.app);
    this.app.start();
}

Main.SCROLL_SPEED = 5;
Main.prototype.update = function() {
    this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
    this.app.renderer.render(this.app.stage);
    // this.heli.update();
    requestAnimationFrame(this.update.bind(this));
};

new Main();
