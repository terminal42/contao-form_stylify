var FormStylify = function(form){
    "use strict";

    form = document.id(form);

	// Style radio containers
	var radios = form.getElements('.radio_container > span');
	radios.each( function(radio) {
		radio.addEvent('click', function() {
			radios.removeClass('active').each( function(el) {
				if (el.getElement('input.radio').checked) el.addClass('active');
			});
		});
		if (radio.getElement('input.radio').checked) radio.addClass('active');
	});

	// Style checkbox containers
	form.getElements('.checkbox_container > span').each( function(checkbox) {
		checkbox.addEvent('click', function() {
			checkbox.getElement('input.checkbox').checked ? checkbox.addClass('active') : checkbox.removeClass('active');
		});
		if (checkbox.getElement('input.checkbox').checked) checkbox.addClass('active');
	});

	// Style select menus
	form.getElements('select').each( function(select) {

		var label = new Element('span', {
		    'class': 'label',
    		'styles': {
        		'position': 'absolute'
    		}
		});

		var pointer = new Element('span', {
    		'class': 'pointer',
    		'styles': {
        		'position': 'absolute'
    		}
		});

		function change() {
			label.set('text', select.getChildren()[select.selectedIndex].get('text'));

			if (select.selectedIndex == 0 && select.getChildren()[select.selectedIndex].get('value') == '') {
    			label.addClass('placeholder');
			} else {
    			label.removeClass('placeholder');
			}
		}

		new Element('div', {'class':'select_container'}).inject(select, 'before').adopt(label, pointer, select);
		select.setStyle('opacity', 0).addEvent('change', change);
		change();
	});

	form.addClass('stylify');
};
