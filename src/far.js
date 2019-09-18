export default function Far() {
    var texture = PIXI.Texture.from("../resources/clouds1.png");
    PIXI.TilingSprite.call(this, texture, 512, 384);

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Far.prototype = Object.create(PIXI.TilingSprite.prototype);

Far.DELTA_X = 0.128;

Far.prototype.setViewportX = function(newViewportX) {
    var distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= distanceTravelled * Far.DELTA_X;
};
