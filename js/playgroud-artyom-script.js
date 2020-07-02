window.addEventListener("load", function () {
    var artyom = new Artyom();

    artyom.addCommands({
        indexes: ["Hallo"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Hallo was kann ich für dich tun");
        }
    });

    artyom.addCommands({
        indexes: ["Guten Morgen","Guten Tag", "Hallo"],
        action: function(i){
            if(i == 2){
                artyom.say("Hallo, was kann ich für dich tun");
            }else if(i == 1){
                artyom.say("Guten Tag, was kann ich für dich tun");
            }else if(i == 0){
                artyom.say("Guten Morgen, was kann ich für dich tun");
            }
        }
    });

    artyom.addCommands({
        indexes: ["Melde mich von einer Prüfung ab"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Welche Prüfung soll ich für dich abmelden");
        }
    });

    artyom.addCommands({
        indexes: ["Mathematik"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("In Ordnung.Ich melde dich für die Prüfung Mathematik ab. Soll ich sonst noch etwas für dich An oder abmelden?");
        }
    });
    
    

    artyom.addCommands({
        indexes: ["Anmelden"],
        smart: false,
        action: function () {
            artyom.say("Welche Prüfung soll ich für dich anmelden?");
        }
    });

    artyom.addCommands({
        indexes: ["Marketing"],
        smart: false,
        action: function () {
            artyom.say("Vielen Dank. Deine Anmeldung für die Prüfung Marketing wurde abgeschickt. Kann ich sonst noch etwas für dich tun?");
        }
    });

    artyom.addCommands({
        indexes: ["Nein"],
        smart: false,
        action: function () {
            artyom.say("In Ordnung. Dann bis zum nächsten mal");
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