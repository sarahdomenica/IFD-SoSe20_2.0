window.addEventListener("load", function () {
    var artyom = new Artyom();

    artyom.addCommands({
        indexes: ["Hallo"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Hallo und herzlich willkommen auf meiner Seite. Viel Spaß beim entdecken der Aufgaben.");
        }
    });

    artyom.addCommands({
        indexes: ["Guten Morgen","Guten Tag", "Hallo"],
        action: function(i){
            if(i == 2){
                artyom.say("Hallo und herzlich willkommen auf meiner Seite. Viel Spaß beim entdecken der Aufgaben.");
            }else if(i == 1){
                artyom.say("Hallo und herzlich willkommen auf meiner Seite. Viel Spaß beim entdecken der Aufgaben.");
            }else if(i == 0){
                artyom.say("Hallo und herzlich willkommen auf meiner Seite. Viel Spaß beim entdecken der Aufgaben.");
            }
        }
    });

  


    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map