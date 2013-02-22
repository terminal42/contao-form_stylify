var FormStylify = new Class({
	initialize: function(formid){
		var form = document.id(document.body).getElement('input[value="' + formid + '"]').getParent('form');

		// Style radio containers
		form.getElements('.radio_container span').each( function(radio) {
			radio.addEvent('click', function() {
				radio.getSiblings('span').removeClass('active').each( function(el) {
					if (el.getElement('input.radio').checked) radio.addClass('active');
				});
			});
			if (radio.getElement('input.radio').checked) radio.addClass('active');
		});

		// Style checkbox containers
		form.getElements('.checkbox_container span').each( function(checkbox) {
			checkbox.addEvent('click', function() {
				checkbox.getElement('input.checkbox').checked ? checkbox.addClass('active') : checkbox.removeClass('active');
			});
			if (checkbox.getElement('input.checkbox').checked) checkbox.addClass('active');
		});

		// Style select menus
		form.getElements('select').each( function(select) {
			var label = new Element('span')
			new Element('div', {'class':'select_container'}).inject(select, 'before').adopt(label, select);
			select.setStyle('opacity',0).addEvent('change', function() {
				label.set('text', select.getChildren()[select.selectedIndex].get('text'));
			});
			label.setStyle('position','absolute').set('text', select.getChildren()[select.selectedIndex].get('text'));
		});

		form.addClass('styled');
	}
});