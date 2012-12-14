var touchMageMenu;

var touchScreenMenus = Class.create({

    initialize: function () {
        // Magento's Top Nav
        this.navElement = $$('#nav>li>a');

        // Check to see if this is a touchscreen device.
        if(this.isTouchScreen()){
            // Run touchscreen navigation observer.
            this.touchNavigation();
        }

    },

    touchNavigation: function(){
        var currentMenuItem, newMenuItem;

        // Since there is no currentMenuItem onload, we're gonna set it to false.
        currentMenuItem = false;

        // Start Observer for each of the Top level Anchors
        this.navElement.invoke('observe', 'click', function(evt){

            //  Clicked Navigation Menu Anchor
            newMenuItem = evt.findElement('a');

            //  Check to see if the anchor clicked has a sub-menu next to it.
            //  If it doesn't, default behavior will occur.
            if(newMenuItem.next('ul')){

                // Check to see if currentMenuItem returns anything other then false
                if(currentMenuItem){

                    // If the currentMenuItem does not matches newMenuItem stop the event
                    // and update currentMenuItem so it does match newMenuItem.
                    // Else follow anchor.
                    if(currentMenuItem !== newMenuItem){
                        Event.stop(evt);
                        currentMenuItem = newMenuItem;
                    }

                // If currentMenuItem returns false, stop the event and update
                // currentMenuItem so it matches newMenuItem;
                }else{

                    Event.stop(evt);
                    currentMenuItem = newMenuItem;

                }

            }

        });
    },

    isTouchScreen: function(){
        var bool;

        /*
         *  Function to determine if Browser is Safari Mobile (iOS) or WebKit Mobile (Android).
         *  Still need to create Firefox Mobile Functionality.  Originally still effected desktop
         *  browsers, now using the same methods used in Modernizr.
         */

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
            bool = true;
        }else{
            bool = false;
        }

        return bool;
    }

});

Event.observe(window, 'load', function () {

    touchMageMenu = new touchScreenMenus();

}.bind(window));