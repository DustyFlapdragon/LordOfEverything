import g from "../globals";
import { isNewStandardGame } from "../misc";

// Check if this is a new standard game
export function main(isContinue: boolean): void {
  if (isNewStandardGame(isContinue)) {
    let i = 0;
    let defaultX = 80;
    let defaultY = 400;
    let pos = 0;
    // Loop through all the items in the game
    for (const [, item] of g.items.entries()) {
      // check to see if this item is enabled, if it isn't do nothing
      if (g.config[tostring(item.ID)]) {
        // check the item type and load things accordingly
        switch (item.Type) {
          // loop through our types and load the items
          case ItemType.ITEM_ACTIVE:
            // work out some spacing for item pedestals
            pos = i * 50;
            // determine position based on number of items
            // 11th item starts at 0
            if (i === 10) {
              pos = 0;
            }
            // if we have already spawned 10 items then move to the top
            if (i > 9) {
              defaultX = 80;
              defaultY = 160;
              pos = i === 10 ? 0 : pos - 500; // divide our gaps by 10 or if its 10th its 0
            }
            // if this is the 6th item or the 16th then account for doors
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
            break;
          case ItemType.ITEM_TRINKET:
            g.p.AddTrinket(item.ID, false);
            // smelt the trinket so its always active
            g.p.UseActiveItem(CollectibleType.COLLECTIBLE_SMELTER);
            break;
          default:
            // give player the passive item or familiar
            g.p.AddCollectible(item.ID);
        }
      }
    }
    Isaac.DebugString("LotF: Callback triggered: MC_POST_GAME_STARTED");
  }
}
