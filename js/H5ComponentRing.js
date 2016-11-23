// 基本环图组件对象
var H5ComponentRing=function (name,cfg) {

	if (cfg.data.length>1) {
		cfg.data=[cfg.data[0]];
	};

	cfg.type='pie';

	var component=new H5ComponentPie(name,cfg);

	component.addClass('h5_component_ring');

	var mask=$('<div class="mask"></div>');

	component.append(mask);

	var text=component.find('.text');
		text.attr('style','');

	if (cfg.data[0][2]) {
		text.css('color',cfg.data[0][2])
	};

	mask.append(text);

	return component;//component.appendTO($(body));
}