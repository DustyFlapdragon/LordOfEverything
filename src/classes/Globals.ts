// Our Globals class so that we do not have to keep calling things directly
export default class Globals {
  // Cached API functions
  g = Game();
  l = Game().GetLevel();
  r = Game().GetRoom();
  // note player may be null as it does not yet exist, make sure we set it in POST_PLAYER_INIT
  p = Isaac.GetPlayer();
  itemPool = Game().GetItemPool();
  itemConfig = Isaac.GetItemConfig();
  config: { [id: string]: boolean } = {};
  items: ItemConfigItem[] = [];
}
