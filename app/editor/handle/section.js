goog.provide('thin.handle.Section');
goog.provide('thin.handle.Section.Sort');
goog.provide('thin.handle.Section.Add');
goog.provide('thin.handle.Section.Remove');

goog.require('thin.core.Component');


thin.handle.Section = function(container) {
  this.draggable_ = false;
  goog.base(this, container);
};
goog.inherits(thin.handle.Section, thin.core.Component);

thin.handle.Section.prototype.createChild = function() {
  this.sort = new thin.handle.Section.Sort(this.getContainer());

  this.addChild(this.sort, true);
};

thin.handle.Section.Sort = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.handle.Section.Sort, thin.core.Component);

thin.handle.Section.Sort.prototype.createChild = function() {
  var lineX = new thin.element.Line(this.getContainer());
  var lineY = new thin.element.Line(this.getContainer());

  this.addChild(lineX, true);
  this.addChild(lineY, true);

  lineX.update({
    'border-color': '#7f7f7f',
    'border-width': 4,
    'x1': 575,
    'x2': 585,
    'y1': 5,
    'y2': 15
  });

  lineY.update({
    'border-color': '#7f7f7f',
    'border-width': 4,
    'x1': 575,
    'x2': 585,
    'y1': 15,
    'y2': 5
  });
};

thin.handle.Section.Add = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.handle.Section.Add, thin.core.Component);

thin.handle.Section.Remove = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.handle.Section.Remove, thin.core.Component);
