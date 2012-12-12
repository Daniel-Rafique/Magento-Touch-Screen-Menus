var touchMageMenu;

var touchMagentoMenus = Class.create({

    initialize: function () {
        this.navElement = $$('#nav>li>a');

        if(this.isTouchScreen){
            this.touchNavigation();
        }

    },

    touchNavigation: function(){
        var currentMenuItem, newMenuItem;
        currentMenuItem = {
            anchor: false
        }
        this.navElement.invoke('observe', 'click', function(evt){
            newMenuItem = evt.findElement('a');
            if(currentMenuItem.anchor){
                if(currentMenuItem.anchor !== newMenuItem){
                    Event.stop(evt);
                    currentMenuItem.anchor = newMenuItem;
                }
            }else{
                Event.stop(evt);
                currentMenuItem.anchor = newMenuItem;
            }
        });
    },

    isTouchScreen: function(){

        /*
         *  Function to determine if Browser is Safari Mobile (iOS) or WebKit Mobile (Android).
         *  Still need to create Firefox Mobile Functionality
         */

        if(Prototype.Browser.MobileSafari || (Prototype.Browser.WebKit && function(){
            try{
                document.createEvent('TouchEvent');
                return true;
            } catch(e) {
                return false;
            }
        })){
            return true;
        }
    }

});

Event.observe(window, 'load', function () {

    touchMageMenu = new touchMagentoMenus();

}.bind(window));