goog.provide('thin.section.Abstract');


goog.require('thin.core.Component');
goog.require('thin.layer.Draw');
goog.require('thin.layer.Select');

thin.section.Abstract = function(container) {
  this.draggable_ = false;

  goog.base(this, container);
};
goog.inherits(thin.section.Abstract, thin.core.Component);

thin.section.Abstract.prototype.drawable_ = true;
thin.section.Abstract.prototype.selectable_ = true;
thin.section.Abstract.prototype.handleable_ = true;

thin.section.Abstract.prototype.createChild = function() {
  this.draw_ = new thin.layer.Draw(this.getContainer());
  this.select_ = new thin.layer.Select(this.getContainer());

  this.getContainer().drawElement.appendChild(this.draw_.getElement());
  this.getContainer().selectElement.appendChild(this.select_.getElement());

  this.draw_.setParent(this);
  this.select_.setParent(this);

  // this.handle_;
};
thin.section.Abstract.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  this.draw_.enterDocument();
  this.select_.enterDocument();
};
thin.section.Abstract.prototype.update = function(attrs) {
  this.draw_.update(attrs);
  this.select_.update(attrs);
};
