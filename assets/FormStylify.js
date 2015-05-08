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

	var radios = form.querySelectorAll('.radio_container input.radio');

	// Style radio containers
    for (i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', function(e) {
            for (var k = 0; k < radios.length; k++) {
                if (radios[k].checked) {
                    addClass(radios[k].parentNode, 'active');
                } else {
                    removeClass(radios[k].parentNode, 'active');
                }
            }
        });

        if (radios[i].checked) {
            addClass(radios[i].parentNode, 'active');
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
            label.innerHTML = this.options[this.selectedIndex].text;

            if (this.selectedIndex == 0 && this.options[this.selectedIndex].value == '') {
                addClass(label, 'placeholder');
            } else {
                removeClass(label, 'placeholder');
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
