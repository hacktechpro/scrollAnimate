/*this module is to make animations with scrollusiong the scroll parameters one can give animation of our ownand can reverse it depending on the scroll directions.*/var direction = -1;var dir = 0;function scrollEle(obj,when,animup,animdown){this.control = obj;this.when = when;console.log(obj);console.log(this.control);$(this.control).on({"reached":function(){console.log("oye");if(dir == 1){console.log("ok in coming");animup();}else if(dir==-1){console.log("coming -1");animdown();}else{console.log("coming");}},"check":function(){console.log("coming1");var a = $(obj).offset();a.top -= $(window).scrollTop();a.top-=$(window).innerHeight();a.top = -a.top - $(obj).height();var b = a.top/$(window).innerHeight();console.log(""+direction+" "+$(window).scrollTop());if($(window).scrollTop()>direction){console.log("otp");dir = 1;console.log(""+b+" "+when);if(when != null){if(b>when){console.log("otp1");$(this).trigger('reached');}}else{$(this).trigger('reached');}}else{console.log("omv");console.log(""+b+" "+when);dir = -1;if(when != null){if(b<when){console.log("omv1");$(this).trigger('reached');}}else{$(this).trigger("reached");}}}});}function Scroll(){this.elements = new Array();this.name="ok";this.func = function addObject(obj,when,animup,animdown){this.elements.push(new scrollEle(obj,when,animup,animdown));};this.chk = function chk(){console.log("chk coming");console.log(this.elements[0]);for(var x in this.elements){console.log(this.elements[x]);$(this.elements[x].control).trigger("check");}};}var atipo = new Scroll();$(window).scroll(function(){atipo.chk();direction = $(window).scrollTop();});