function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67ykqRE1FLB":
        Script1();
        break;
      case "6CqU1g06kds":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('65pD9EhYqZi');
const duration = 1000;
const easing = 'ease-out';
const id = '66fwD1KqGzb';
const bounceAmount = 1;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6MwkvZ84z2v');
const duration = 750;
const easing = 'ease-out';
const id = '6IO8IdUOrst';
const bounceAmount = 1;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
