import g from "../globals";

/**
 * add active items to the starting room
 */
export function addActiveCollectibles(): void {
  // default values for position
  let i = 0;
  let defaultX = 80;
  let defaultY = 400;
  let pos = 0;

  // loop through all of our items and add items
  for (const [, item] of g.items.entries()) {
    // check if this option is enabled
    if (g.itemsConfig[tostring(item.ID)]) {
      // for every time we add an item we need to add some space for the next pedestal
      pos = i * 50;

      // if this is the 10th pedestal then we need to move up to the top
      if (i > 9) {
        defaultX = 80;
        defaultY = 160;
        pos = i === 10 ? 0 : pos - 500; // divide our gaps by 10 or if its 10th its 0
      }

      // if we are the 11th item we zero position
      if (i === 10) {
        pos = 0;
      }
      // account for door space
      if (i === 5 || i > 14) {
        defaultX = 105;
      }
      // only spawn the first 20 items @todo add items to preexisting pedestals
      if (i < 20) {
        Isaac.Spawn(
          EntityType.ENTITY_PICKUP,
          PickupVariant.PICKUP_COLLECTIBLE,
          item.ID,
          Vector(defaultX + pos, defaultY),
          Vector(0, 0),
          null,
        );
      }
      i += 1;
    }
  }
}

/**
 * add passive items to the player
 */
export function addPassiveCollectibles(): void {
  for (const [, item] of g.items.entries()) {
    if (g.itemsConfig[tostring(item.ID)]) {
      // give player the passive item or familiar
      g.p.AddCollectible(item.ID);
    }
  }
}

/**
 * add trinkets to the player
 */
export function addTrinkets(): void {
  for (const [, item] of g.trinkets.entries()) {
    if (g.trinketsConfig[tostring(item.ID)]) {
      g.p.AddTrinket(item.ID, false);
      // smelt the trinket so its always active
      g.p.UseActiveItem(CollectibleType.COLLECTIBLE_SMELTER);
    }
  }
}
