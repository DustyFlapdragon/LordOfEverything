import * as json from "json";

// make sure we have set the mod
let mod: Mod | null = null;

/**
 * Set the mod to ensure its available for the other functions
 * @param newMod Mod Table
 */
export function setMod(newMod: Mod): void {
  mod = newMod;
}

/**
 * Process the save Data and save it
 */
export function save(): void {
  if (mod === null) {
    error('"saveData.save()" was called without the mod being initialized.');
  }

  // build what we need to save
  const saveData = {};

  mod.SaveData(json.encode(saveData));
}

/**
 * load the save data and process it
 */
export function load(): void {
  if (mod === null) {
    error('"saveData.load()" was called without the mod being initialized.');
  }
  // check we have some save data file
  if (!Isaac.HasModData(mod)) {
    return;
  }
  // get the save data and decode it
  const saveData = json.decode(Isaac.LoadModData(mod));
}
