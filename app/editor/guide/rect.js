goog.provide('thin.guide.Rect');


goog.require('thin.guide.Abstract');

thin.guide.Rect = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.guide.Rect, thin.guide.Abstract);

// thin.guide.Rect.prototype.createDom = function() {
//   goog.base(this, 'createDom');
//
//   this.addChild(new thin.element.Rect(this.getContainer()), true);
// };


thin.guide.Rect.prototype.createChild = function() {
  // this.top_left = thin.element.Ellipse(this.getContainer());
  // this.top_center = thin.element.Ellipse(this.getContainer());
  // this.top_right = thin.element.Ellipse(this.getContainer());


  // this.body = new thin.element.Rect(this.getContainer());
  this.resizer = new thin.guide.resizer.Container(this.getContainer());

  // this.body.update({
  //   'border-color': '#0096fd'
  // });

  // this.resizer.update({
  //   'fill-color': '#0096fd'
  // });

  // this.getContainer().resizeElement.appendChild(this.resizer.getElement());

  // this.addChild(this.body, true);
  this.addChild(this.resizer, true);
};
