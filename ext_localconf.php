<?php
defined('TYPO3_MODE') || die('Access denied.');

$GLOBALS['TYPO3_CONF_VARS']['FE']['eID_include']['sitemap'] = 'EXT:'. $_EXTKEY.'/Classes/Utility/Ajax/Sitemap.php';
$GLOBALS['TYPO3_CONF_VARS']['FE']['eID_include']['detail'] = 'EXT:'. $_EXTKEY.'/Classes/Utility/Ajax/Detail.php';
$GLOBALS['TYPO3_CONF_VARS']['FE']['eID_include']['wms'] = 'EXT:'. $_EXTKEY.'/Classes/Utility/Ajax/GetWMS.php';
$GLOBALS['TYPO3_CONF_VARS']['FE']['eID_include']['solr'] = 'EXT:'. $_EXTKEY.'/Classes/Utility/Ajax/GetSolr.php';

$TYPO3_CONF_VARS['EXTCONF']['realurl'] =  array(
        '_DEFAULT' => array(
                'init' => array(
                        'enableCHashCache' => 1,
                        'appendMissingSlash' => 'ifNotFile',
                        'enableUrlDecodeCache' => 1,
                        'enableUrlEncodeCache' => 1,
                ),
                'fixedPostVars' => array(
                ),

                'postVarSets' => array(
                        '_DEFAULT' => array(
                                'ID' => array(
                                        array('GETvar' => 'tx_find_find[id]')
 	       	                 ),
 	       	                 'page' => array(
 	       	                         array()
 	       	                 ),

                ),
           ),
        ),
);

$GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects'][\Subugoe\Find\Service\SolrServiceProvider::class] = [
    'className' => \Subhh\Hosfindfacetviews\Service\SolrServiceProvider::class
];
