import { VERSION } from "./constants";
import g from "./globals";

const CATEGORY_NAME = "Lord of Everything";
const INFO_PANEL = "Info";

// here we build the ModConfigMenu configuration
export function register(): void {
  if (ModConfigMenu === null) {
    return;
  }

  // add the info menu panel
  addInfoMenuItem();

  // add the various sub-menus
  addSubMenuItem(ItemType.ITEM_ACTIVE);
  addSubMenuItem(ItemType.ITEM_PASSIVE);
  addSubMenuItem(ItemType.ITEM_FAMILIAR);
  addSubMenuItem(ItemType.ITEM_TRINKET);

  Isaac.DebugString("LotF: Mod Config Menu Setup Complete");
}

// Create the sub-menus and add the settings
function addSubMenuItem(type: ItemType): void {
  let subCategory: string;
  let items = g.items;
  let config = g.itemsConfig;

  // determine our item type and set the subcategory
  switch (type) {
    case ItemType.ITEM_ACTIVE:
      subCategory = "Active";
      break;
    case ItemType.ITEM_FAMILIAR:
      subCategory = "Familiars";
      break;
    case ItemType.ITEM_PASSIVE:
      subCategory = "Passive";
      break;
    case ItemType.ITEM_TRINKET:
      items = g.trinkets;
      config = g.trinketsConfig;
      subCategory = "Trinkets";
      break;
    default:
      subCategory = "Undefined";
  }
  // sort our items by name for convenience @ todo make dynamic
  items.sort((a, b) => (a.Name < b.Name ? -1 : 1));

  // For every item of this ItemType add the entry to the
  for (const [, item] of items.entries()) {
    if (item.Type === type) {
      const id = tostring(item.ID);

      // add the setting the the menu and change the global config if it changes
      ModConfigMenu.AddSetting(CATEGORY_NAME, subCategory, {
        Type: ModConfigMenuOptionType.BOOLEAN,
        CurrentSetting: () => config[id],
        Display: () => `${item.Name}:${config[id] ? "On" : "Off"}`,
        OnChange: (newValue: boolean | number) => {
          config[id] = newValue as boolean;
        },
        Info: [`Quality:${item.Quality}`, item.Description],
      });
    }
  }
}

// lets give the user some information about the mod
function addInfoMenuItem(): void {
  ModConfigMenu.AddText(CATEGORY_NAME, INFO_PANEL, () => "Lord Of Everything");
  ModConfigMenu.AddText(CATEGORY_NAME, INFO_PANEL, () => `Version: ${VERSION}`);
  ModConfigMenu.AddSpace(CATEGORY_NAME, INFO_PANEL);
  ModConfigMenu.AddText(CATEGORY_NAME, INFO_PANEL, () => "by DustyFlapdragon");
  ModConfigMenu.AddSpace(CATEGORY_NAME, INFO_PANEL);
  ModConfigMenu.AddText(
    CATEGORY_NAME,
    INFO_PANEL,
    () => "Built with IsaacScript",
  );
  ModConfigMenu.AddText(
    CATEGORY_NAME,
    INFO_PANEL,
    () => "https://isaacscript.github.io/",
  );
}
