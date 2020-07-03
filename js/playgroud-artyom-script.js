window.addEventListener("load", function () {
    var artyom = new Artyom();

    artyom.addCommands({
        indexes: ["Hallo"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Hallo und herzlich Willkommen auf der Aufgabenseite von Sarah. Viel Spaß beim durchschauen.");
        }
    });

    artyom.addCommands({
        indexes: ["Guten Morgen","Guten Tag", "Hallo"],
        action: function(i){
            if(i == 2){
                artyom.say("Hallo und herzlich Willkommen auf der Aufgabenseite von Sarah. Viel Spaß beim durchschauen.");
            }else if(i == 1){
                artyom.say("Guten Tag und herzlich Willkommen auf der Aufgabenseite von Sarah. Viel Spaß beim durchschauen.");
            }else if(i == 0){
                artyom.say("Guten Morgen und herzlich Willkommen auf der Aufgabenseite von Sarah. Viel Spaß beim durchschauen.");
            }
        }
    });

    
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map