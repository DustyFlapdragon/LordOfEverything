import * as postGameStarted from "./callbacks/postGameStarted";
import * as postPlayerInit from "./callbacks/postPlayerInit";
import * as preGameExit from "./callbacks/preGameExit";
import g from "./globals";
import * as modConfigMenu from "./modConfigMenu";
import * as saveData from "./saveData";

// Register the mod
// (which will make it show up in the list of mods on the mod screen in the main menu)
const LordOfEverything = RegisterMod("LordOfEverything", 1);

// getCollectibles() doesn't return collectibles so lets create our own array of items
for (let i = 0; i < Isaac.GetItemConfig().GetCollectibles().Size; i++) {
  table.insert(g.items, Isaac.GetItemConfig().GetCollectible(i));
  // now for each item we have set the default config setting
  g.config[tostring(i)] = false;
}

// set our mod and load the savedata, which will override defaults above
saveData.setMod(LordOfEverything);
saveData.load();

// Register callbacks
LordOfEverything.AddCallback(
  ModCallbacks.MC_POST_PLAYER_INIT,
  postPlayerInit.main,
);
LordOfEverything.AddCallback(ModCallbacks.MC_PRE_GAME_EXIT, preGameExit.main);
LordOfEverything.AddCallback(
  ModCallbacks.MC_POST_GAME_STARTED,
  postGameStarted.main,
);

// setup the config menu
modConfigMenu.register();

// Print an initialization message to the "log.txt" file
Isaac.DebugString("LordOfEverything initialized.");
