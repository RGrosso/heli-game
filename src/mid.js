export default function Mid() {
    var texture = PIXI.Texture.from("../resources/clouds2.png");
    PIXI.TilingSprite.call(this, texture, 512, 256);

    this.position.x = 0;
    this.position.y = 128;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Mid.prototype = Object.create(PIXI.TilingSprite.prototype);

Mid.DELTA_X = 0.64;

Mid.prototype.setViewportX = function(newViewportX) {
    var distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= distanceTravelled * Mid.DELTA_X;
};
