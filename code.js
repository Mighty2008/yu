var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1073cfe0-57cc-4e74-aa8e-e8888e913e61","e0f3b37e-c01e-4f27-9070-61cd92f03076","6f59a402-3ec3-4b76-b09c-181a599e9567","dba4e814-5907-46c3-835f-c4194a67a550","2747a41f-2772-4365-bb9c-2394e3f465b4","75d8c9b2-fe03-4654-b8b7-4e12470a419b","530d68ad-12ec-42d4-b6a9-f3ca5289f08b","46b80a10-a7d1-4f25-b8fc-49b05b8ed56c","f27fa199-d87d-4dfb-96b5-5a14bdb742cb"],"propsByKey":{"1073cfe0-57cc-4e74-aa8e-e8888e913e61":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":64,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"7XnCAzzvVRPgVwozkMPaWajydntz9Jfd","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":200},"rootRelativePath":"assets/1073cfe0-57cc-4e74-aa8e-e8888e913e61.png"},"e0f3b37e-c01e-4f27-9070-61cd92f03076":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":21,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"HQt1DYomg4_VB6sAphPk2AkFQxB6lQuN","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":59},"rootRelativePath":"assets/e0f3b37e-c01e-4f27-9070-61cd92f03076.png"},"6f59a402-3ec3-4b76-b09c-181a599e9567":{"name":"cj8_odoI.jpg_1","sourceUrl":null,"frameSize":{"x":290,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"iH3atjQ1xYtgeW.YbIwuC1d4U1bVwdP.","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":290},"rootRelativePath":"assets/6f59a402-3ec3-4b76-b09c-181a599e9567.png"},"dba4e814-5907-46c3-835f-c4194a67a550":{"name":"animation_3","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"2747a41f-2772-4365-bb9c-2394e3f465b4":{"name":"cj8_odoI.jpg_2","sourceUrl":null,"frameSize":{"x":240,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"GIgzjtckDswAZ6uCNbRG0C6hG84DgMdP","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":240},"rootRelativePath":"assets/2747a41f-2772-4365-bb9c-2394e3f465b4.png"},"75d8c9b2-fe03-4654-b8b7-4e12470a419b":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":36,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"hSFrsqplO8y5uMjjsxvp6fu4XOs9N5iC","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":60},"rootRelativePath":"assets/75d8c9b2-fe03-4654-b8b7-4e12470a419b.png"},"530d68ad-12ec-42d4-b6a9-f3ca5289f08b":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"i6xw7PbxS2ICyuDPrij5MlbaKW.VuVEE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/530d68ad-12ec-42d4-b6a9-f3ca5289f08b.png"},"46b80a10-a7d1-4f25-b8fc-49b05b8ed56c":{"name":"animation_5_copy_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"3d08QSCSNMOxV06NYzNUqAKQEx3amkOP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/46b80a10-a7d1-4f25-b8fc-49b05b8ed56c.png"},"f27fa199-d87d-4dfb-96b5-5a14bdb742cb":{"name":"animation_3_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7k30XVW1fSX_ne51ZFtxA2nnOdZTX40N","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f27fa199-d87d-4dfb-96b5-5a14bdb742cb.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var s1=createSprite(380,65,48,350)
s1.shapeColor=rgb(36,37,41)

var s2=createSprite(20,65,48,350)
s2.shapeColor=rgb(36,37,41)

var s=createSprite(200,120)
s.setAnimation("cj8_odoI.jpg_2")
s.scale=1.3
var wk1=createSprite(25,318,50,190)
wk1.setAnimation("animation_1");
wk1.scale=0.8

var wk2=createSprite(76,318,50,190)
wk2.setAnimation("animation_1")
wk2.scale=0.8

var wk3=createSprite(126,318,50,190)
wk3.setAnimation("animation_1")
wk3.scale=0.8

var wk4=createSprite(176,318,50,190)
wk4.setAnimation("animation_1")
wk4.scale=0.8

var wk5=createSprite(226,318,50,190)
wk5.setAnimation("animation_1")
wk5.scale=0.8

var wk6=createSprite(276,318,50,190)
wk6.setAnimation("animation_1")
wk6.scale=0.8

var wk7=createSprite(326,318,50,190)
wk7.setAnimation("animation_1")
wk7.scale=0.8

var wk8=createSprite(376,318,50,190)
wk8.setAnimation("animation_1")
wk8.scale=0.8

var bk1=createSprite(40,277,50,190)
bk1.setAnimation("animation_2")
bk1.scale=1.3

var bk2=createSprite(90,277,50,190)
bk2.setAnimation("animation_2")
bk2.scale=1.3

var bk3=createSprite(190,277,50,190)
bk3.setAnimation("animation_2")
bk3.scale=1.3

var bk4=createSprite(240,277,50,190)
bk4.setAnimation("animation_2")
bk4.scale=1.3

var bk5=createSprite(290,277,50,190)
bk5.setAnimation("animation_2")
bk5.scale=1.3

var bk6=createSprite(390,277,50,190)
bk6.setAnimation("animation_2")
bk6.scale=1.3

function draw() {
  background("lightBlue")
  if(mousePressedOver(wk1)){
  playSound("assets/c1.mp3", false);
  }
  
   if(mousePressedOver(wk2)){
  playSound("assets/d.mp3", false);
  }
  
  if(mousePressedOver(wk3)){
  playSound("assets/e.mp3", false);
  }
  
   if(mousePressedOver(wk4)){
  playSound("assets/f.mp3", false);
  }
  
  
  if(mousePressedOver(wk5)){
  playSound("assets/g6.mp3", false);
  }
  
  if(mousePressedOver(wk6)){
  playSound("assets/a.mp3", false);
  }
  
   if(mousePressedOver(wk7)){
  playSound("assets/b1.mp3", false);
  }
  
  if(mousePressedOver(wk8)){
  playSound("assets/c10.mp3", false);
  }
  
  if(mousePressedOver(bk1)){
  playSound("assets/c12.mp3", false);
  stopSound("assets/c1.mp3");
  }
  
   if(mousePressedOver(bk2)){
  playSound("assets/d1.mp3", false);
  stopSound("assets/d.mp3");
  }
  
  if(mousePressedOver(bk3)){
  playSound("assets/f1.mp3", false);
  stopSound("assets/f.mp3");
  }
  
   if(mousePressedOver(bk4)){
  playSound("assets/gr.mp3", false);
  stopSound("assets/g6.mp3");
  }
  
  
  if(mousePressedOver(bk5)){
  playSound("assets/yt.mp3", false);
  stopSound("assets/a.mp3");
  }
  
  if(mousePressedOver(bk6)){
  playSound("assets/uky.mp3", false);
  stopSound("assets/c10.mp3");
  }
  
  
  
  
 drawSprites();
 textSize(30) 
 fill("red")
 text("C",20,350)
 text("D",67,350)
 text("E",120,350)
 text("F",170,350)
 text("G",217,350)
 text("A",267,350)
 text("B",317,350)
 text("C",367,350)
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
