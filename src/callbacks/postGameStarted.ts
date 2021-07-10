import * as addItems from "../features/addItems";
import { isNewStandardGame } from "../misc";

/**
 * Process functions postGameStarted
 * @param isContinue boolean of wether this is a new game
 */
export function main(isContinue: boolean): void {
  // Check if this is a new standard game
  if (isNewStandardGame(isContinue)) {
    addItems.addActiveCollectibles();
    addItems.addPassiveCollectibles();
    addItems.addTrinkets();
  }
  Isaac.DebugString("LotF: Callback triggered: MC_POST_GAME_STARTED");
}
