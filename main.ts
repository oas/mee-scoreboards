//% block="Scoreboard"
//% icon=""
//% color="#3f51b5"
namespace scoreboard {
    //% block="add scoreboard %name"
    export function addScoreboard(name: string) {
        player.execute("scoreboard objectives add " + name + " dummy");
    }

    //% block="remove scoreboard %name"
    export function removeScoreboard(name: string) {
        player.execute("scoreboard objectives remove " + name);
    }

    //% block="display scoreboard %name at %display"
    export function displayScoreboard(name: string, display: Display) {
        let displayCommand: string;
        switch (display) {
            case Display.SIDEBAR:
                displayCommand = "sidebar";
                break;
            default:
                displayCommand = "sidebar";
                break;
        }

        player.execute("scoreboard objectives setdisplay " + displayCommand + " " + name);
    }

    //% block="add entry %entry with value %value to scoreboard %name"
    export function addScoreboardEntry(entry: string, value: number, name: string) {
        player.execute("scoreboard players add " + entry + " " + name + " " + value);
    }

    //% block="set entry %entry to %value in scoreboard %name"
    export function setScoreboardEntry(entry: string, value: number, name: string) {
        player.execute("scoreboard players set " + entry + " " + name + " " + value);
    }

    //% block="remove entry %entry of scoreboard %name"
    export function removeScoreboardEntry(entry: string, name: string) {
        player.execute("scoreboard players remove " + entry + " " + name);
    }

    // TODO: Add LIST and BELOW_NAME.
    export enum Display {
        //% block=sidebar
        SIDEBAR
    }
}