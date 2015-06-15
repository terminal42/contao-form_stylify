var FormStylify = function(formId){
    "use strict";

    var inputs = document.querySelectorAll('input[value="' + formId + '"]');

    if (inputs.length < 1) {
        return;
    }

    var i, form, parent = inputs[0].parentNode;

    // Find the form
    while (parent) {
        if (parent.tagName.toLowerCase() == 'form') {
            form = parent;
            break;
        }

        parent = parent.parentNode;
    }

    var removeClass = function(el, className) {
        var classes = el.className.split(' ');
        var index = classes.indexOf(className);
        if (index > -1) {
            classes.splice(index, 1);
        }
        el.className = classes.join(' ');
    };

    var addClass = function(el, className) {
        var classes = el.className ? el.className.split(' ') : [];
        classes.push(className);
        el.className = classes.join(' ');
    };

    var radios = {};
    var radio_inputs = form.querySelectorAll('.radio_container input.radio');

    // Style radio containers
	for (i = 0; i < radio_inputs.length; i++) {
        var radio = radio_inputs[i];
        var radio_name = radio.name;

        // Group radio by names
        if (!radios[radio_name]) {
            radios[radio_name] = [];
        }

        radios[radio_name].push(radio);

        // Register the change event
        radio.addEventListener('change', function() {
            var current_radio_name = this.name;

            for (var k = 0; k < radios[current_radio_name].length; k++) {
                if (radios[current_radio_name][k].checked) {
                    addClass(radios[current_radio_name][k].parentNode, 'active');
                } else {
                    removeClass(radios[current_radio_name][k].parentNode, 'active');
                }
            }
        });

        if (radio.checked) {
            addClass(radio.parentNode, 'active');
        }
    }

    var checkboxes = form.querySelectorAll('.checkbox_container input.checkbox');

	// Style checkbox containers
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            this.checked ? addClass(this.parentNode, 'active') : removeClass(this.parentNode, 'active');
        });

        if (checkboxes[i].checked) {
            addClass(checkboxes[i].parentNode, 'active');
        }
    }

    var selects = form.querySelectorAll('select');

	// Style select menus
    for (i = 0; i < selects.length; i++) {
        if (selects[i].multiple) {
            return;
        }

        var label = document.createElement('span');
        addClass(label, 'label');
        label.style.position = 'absolute';

        var pointer = document.createElement('span');
        addClass(pointer, 'pointer');
        pointer.style.position = 'absolute';

        var change = function() {
            var selectLabel = this.previousSibling.previousSibling;

            selectLabel.innerHTML = this.options[this.selectedIndex].text;

            if (this.selectedIndex == 0 && this.options[this.selectedIndex].value == '') {
                addClass(selectLabel, 'placeholder');
            } else {
                removeClass(selectLabel, 'placeholder');
            }
        };

        var container = document.createElement('div');
        addClass(container, 'select_container');
        selects[i].parentNode.insertBefore(container, selects[i]);
        container.appendChild(label);
        container.appendChild(pointer);
        container.appendChild(selects[i]);

        selects[i].style.opacity = 0;
        selects[i].addEventListener('change', change);
        change.apply(selects[i]);
    }

    addClass(form, 'stylify');
};
