goog.provide('thin.core.Container');


goog.require('goog.graphics.SvgGraphics');
goog.require('thin.section.Container');
goog.require('thin.section.Header');
goog.require('thin.section.Margin');
goog.require('thin.section.Grid');
goog.require('thin.section.Background');


/**
 * @constructor
 */
thin.core.Container = function(workspace) {
  goog.base(this, 0, 0);

  this.workspace_ = workspace;
};
goog.inherits(thin.core.Container, goog.graphics.SvgGraphics);


/**
 * @type {string}
 */
thin.core.Container.CANVAS_CLASS_ID = 'canvas';


/**
 * @type {string}
 */
thin.core.Container.SVG_NS_XLINK = 'http://www.w3.org/1999/xlink';


/** @inheritDoc */
thin.core.Container.prototype.createDom = function() {
  // var attributes = {
  //   'width': this.width,
  //   'height': this.height,
  //   'overflow': 'hidden'
  // };

  var element = this.createElement('svg', {
    'height': 900,
    'width': 500,
    'xmlns': goog.graphics.SvgGraphics.SVG_NS_,
    'xmlns:xlink': thin.core.Container.SVG_NS_XLINK
  });

  // var groupElement = this.createElement('g');

  this.defsElement_ = this.createElement('defs');
  this.selectElement = this.createElement('g');
  this.drawElement = this.createElement('g');
  this.canvasElement = this.createElement('g');
  this.marginElement = this.createElement('g');
  this.outlineElement = this.createElement('g');

  this.resizeElement = this.createElement('g');

  // this.handleElement = new thin.section.Container(this);
  // this.lineElement = new thin.section.Container(this);
  // this.resizeElement = new thin.section.Container(this);
  // this.outlineElement = new thin.section.Container(this);
  // this.selectElement = new thin.section.Container(this);
  // this.drawElement = new thin.section.Container(this);
  // this.canvasElement = new thin.section.Container(this);
  // this.marginElement = new thin.section.Container(this);
  // this.gridElement = new thin.section.Container(this);
  // this.backgroundElement = new thin.section.Container(this);

  element.appendChild(this.defsElement_);

  element.appendChild(this.marginElement);
  element.appendChild(this.selectElement);
  element.appendChild(this.drawElement);
  element.appendChild(this.canvasElement);
  element.appendChild(this.outlineElement);

  element.appendChild(this.resizeElement);


  // element.appendChild(this.handleElement.getElement());
  // element.appendChild(this.lineElement.getElement());
  // element.appendChild(this.resizeElement.getElement());
  // element.appendChild(this.outlineElement.getElement());
  // element.appendChild(this.selectElement.getElement());
  // element.appendChild(this.drawElement.getElement());
  // element.appendChild(this.canvasElement.getElement());
  // element.appendChild(this.marginElement.getElement());
  // element.appendChild(this.gridElement.getElement());
  // element.appendChild(this.backgroundElement.getElement());

  // Use the svgElement as the root element.
  this.setElementInternal(element);

  // Set up the coordinate system.
  this.setViewBox_();
  // if (this.coordWidth || this.coordLeft || this.coordTop) {
  //   this.getElement().setAttribute('preserveAspectRatio', 'none');
  //   if (this.useManualViewbox_) {
  //     this.updateManualViewBox_();
  //   } else {
  //     this.getElement().setAttribute('viewBox', this.getViewBox_());
  //   }
  // }

  // this.setElementAttributes(this.backElement.getElement(), {
  //   'class': 'back-group'
  // });
  // this.setElementAttributes(this.canvasElement.getElement(), {
  //   'class': 'canvas'
  // });
  // this.setElementAttributes(this.frontElement.getElement(), {
  //   'class': 'front-group'
  // });

  this.setCoordOrigin(0, 0);
  this.setCoordSize(500, 900);
  this.createChild();
  //
  // window.container = this;
};


thin.core.Container.prototype.createChild = function() {

  var size = {
    'x': 0,
    'y': 0,
    'width': 500,
    'height': 900
  };

  // var background = this.backgroundElement.addChildWithId(new thin.section.Background(this), 'background', true);
  // var grid = this.gridElement.addChildWithId(new thin.section.Grid(this), 'grid', true);
  // var margin = this.marginElement.addChildWithId(new thin.section.Margin(this), 'margin', true);
  // var header = this.canvasElement.addChildWithId(new thin.section.Header(this), 'header', true);
  // var select = this.selectElement.addChildWithId(new thin.section.Margin(this), 'select', true);
  // var draw = this.drawElement.addChildWithId(new thin.section.Margin(this), 'draw', true);

  this.margin = new thin.section.Margin(this);
  this.header = new thin.section.Header(this);
  this.detail = new thin.section.Header(this);
  this.footer = new thin.section.Header(this);

  this.canvasElement.appendChild(this.header.getElement());
  this.marginElement.appendChild(this.margin.getElement());



  // background.update({
  //   'x': 0,
  //   'y': 0,
  //   'width': 500,
  //   'height': 900,
  //   'fill-color': '#000000'
  // });

  this.margin.update({
    'x': 0,
    'y': 0,
    'width': 500,
    'height': 900,
    'fill-color': '#F0F8FF'
  });


  this.header.update({
    'x': 0,
    'y': 0,
    'width': 500,
    'height': 300,
    'fill-color': '#FF0000'
  });

  this.detail.update({
    'x': 0,
    'y': 300,
    'width': 500,
    'height': 300,
    'fill-color': '#00FF00'
  });

  this.footer.update({
    'x': 0,
    'y': 600,
    'width': 500,
    'height': 300,
    'fill-color': '#0000FF'
  });

  // TODO test
  // var rect = new thin.shape.Rect(this);
  // header.addChild(rect, true);
  //
  // rect.update({
  //   'x': 20, 'y': 30,
  //   'width': 50,
  //   'height': 30,
  //   'border-color': '#00FF00',
  //   'fill-color': '#FFFF00'
  // });
};

thin.core.Container.prototype.createElement = function(tagName, opt_attributes) {
  return this.createSvgElement_(tagName, opt_attributes);
};


thin.core.Container.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  this.header.enterDocument();
  this.footer.enterDocument();
  this.detail.enterDocument();
  this.margin.enterDocument();

  // this.handleElement.enterDocument();
  // this.lineElement.enterDocument();
  // this.resizeElement.enterDocument();
  // this.outlineElement.enterDocument();
  // this.selectElement.enterDocument();
  // this.drawElement.enterDocument();
  // this.canvasElement.enterDocument();
  // this.marginElement.enterDocument();
  // this.gridElement.enterDocument();
  // this.backgroundElement.enterDocument();

};


/**
 * @return {thin.core.Workspace}
 */
thin.core.Container.prototype.getWorkspace = function() {
  return this.workspace_;
};
