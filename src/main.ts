import * as postPlayerInit from "./callbacks/postPlayerInit";
import * as saveData from "./saveData";

// Register the mod
// (which will make it show up in the list of mods on the mod screen in the main menu)
const LordOfEverything = RegisterMod("LordOfEverything", 1);

// set our mod and load the savedata
saveData.setMod(LordOfEverything);
saveData.load();

// Register callbacks
LordOfEverything.AddCallback(
  ModCallbacks.MC_POST_PLAYER_INIT,
  postPlayerInit.main,
);

// Print an initialization message to the "log.txt" file
Isaac.DebugString("LordOfEverything initialized.");
