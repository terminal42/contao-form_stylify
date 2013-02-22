<?php

/**
 * Contao Open Source CMS
 * Copyright (C) 2005-2013 Leo Feyer
 *
 * Formerly known as TYPOlight Open Source CMS.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *
 * PHP version 5
 * @copyright  terminal42 gmbh 2013
 * @author     Yanick Witschi <yanick.witschi@terminal42.ch>
 * @license    LGPL
 */

class FormStylify
{
	public function stylify($objWidget, $formId, $arrData)
	{
		if ($arrData['form_stylify'] && !in_array($formId, $GLOBALS['FORM_STYLIFY']))
		{
			$GLOBALS['TL_JAVASCRIPT']['form_stylify'] = 'system/modules/form_stylify/assets/FormStylify.js';
			$GLOBALS['TL_MOOTOOLS'][] = "<script>
			window.addEvents({'domready': function() { new FormStylify('$formId') }, 'ajax_change': function() { new FormStylify('$formId') }});
			</script>";

			// prevent from being loaded as many times as there are form fields in the form
			// we cannot unset the hook globally, as we want to support more than one form on the same page
			$GLOBALS['FORM_STYLIFY'][] = $formId;
		}

		return $objWidget;
	}
}