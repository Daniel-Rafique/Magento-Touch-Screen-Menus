Touch Screen Friendly Magento Menus
================================================

This script will allow touch screen users to easily access drop down menus through Magento's navigation.  Currently tapping a menu item on an iOS/Android device will take you straight to the link you've clicked, with this script you'll be shown the associated dropdown menu on your first tap, and with a second tab you'll be able to follow your original target.

### Installation

1. Add the script to your skin/frontend/PACKAGE/THEME/js directory.
2. Update your Layout XML to include the js file.
    <reference name="head">
        <action method="addItem"><type>skin_js</type><name>js/touchScreenMenus.js</name></action>
    </reference>
3. Clear Magento caches if applicable.
4. Open your magento installation on your touch screen friendly browser of choice and enjoy.
