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

$GLOBALS['TL_DCA']['tl_form']['palettes']['default'] = str_replace('method', 'method,form_stylify', $GLOBALS['TL_DCA']['tl_form']['palettes']['default']);
$GLOBALS['TL_DCA']['tl_form']['fields']['method']['eval']['tl_class'] = 'w50';
$GLOBALS['TL_DCA']['tl_form']['fields']['form_stylify'] = array
(
	'label'			=> &$GLOBALS['TL_LANG']['tl_form']['form_stylify'],
	'exclude'		=> true,
	'inputType'		=> 'checkbox',
	'eval'			=> array('tl_class' => 'w50 m12')
);