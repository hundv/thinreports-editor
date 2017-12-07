goog.provide('thin.attribute.Abstract');


goog.require('thin.ui');
goog.require('goog.array');

thin.attribute.EventType = thin.ui.PropertyPane.Property.EventType;

/**
 * @constructor
 */
thin.attribute.Abstract = function(type, name) {
  this.type = type;
  this.name = name;
};
thin.attribute.Abstract.prototype.addItem = goog.abstractMethod;
thin.attribute.Abstract.prototype.getPropertyPane = function() {
  return thin.ui.getComponent('proppane');
};
thin.attribute.Abstract.prototype.getPropertyGroup = goog.abstractMethod;
thin.attribute.Abstract.prototype.getGroup_ = function(group_id) {
  var propertyPane = this.getPropertyPane();
  var group_ids = propertyPane.getChildIds();

  if (-1 != goog.array.indexOf(group_ids, group_id)) {
    return propertyPane.getChild(group_id);
  } else {
    return propertyPane.addGroup(thin.t('property_group_' + group_id), group_id);
  }
};
thin.attribute.Abstract.prototype.getBasisGroup = function() {
  return this.getGroup_('basis');
};
thin.attribute.Abstract.prototype.getShapeGroup = function() {
  return this.getGroup_('shape');
};
thin.attribute.Abstract.prototype.getAssociationGroup = function() {
  return this.getGroup_('association');
};

thin.attribute.Number = function(name) {
  goog.base(this, 'number', name);
};
goog.inherits(thin.attribute.Number, thin.attribute.Abstract);

thin.attribute.Number.prototype.getPropertyGroup = function() {
  return this.getBasisGroup();
};

thin.attribute.Number.prototype.showProperty = function(opt_validate_fn) {
  var property = new thin.ui.PropertyPane.NumberInputProperty(thin.t('field_left_position'));

  property.addEventListener(thin.attribute.EventType.CHANGE,
    function(e) {
      var value = Number(e.target.getValue());

      console.log('onchange', value);
      // scope.commit({ 'left': value });
    }, false, this);

  var control = property.getValueControl();
  control.getNumberValidator().setAllowDecimal(true, 1);

  if (goog.isFunction(opt_validate_fn)) {
    var rangeValidator = new thin.ui.Input.Validator();
    rangeValidator.setMethod(opt_validate_fn);

    control.getInput().addValidator(rangeValidator);
  }

  this.getPropertyPane().addProperty(property, this.getBasisGroup(), 'left');
};
