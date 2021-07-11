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
  // sort our items by our chosen setting, default is a-Z
  if (g.sorting === 2) {
    items.sort((a, b) => (a.Name > b.Name ? -1 : 1));
  } else if (g.sorting === 3) {
    items.sort((a, b) => (a.Quality > b.Quality ? -1 : 1));
  } else if (g.sorting === 4) {
    items.sort((a, b) => (a.Quality < b.Quality ? -1 : 1));
  } else {
    items.sort((a, b) => (a.Name < b.Name ? -1 : 1));
  }
  // For every item of this ItemType add the entry to the
  for (const [, item] of items.entries()) {
    if (item.Type === type) {
      const id = tostring(item.ID);

      // add the setting the the menu and change the global config if it changes
      ModConfigMenu.AddSetting(CATEGORY_NAME, subCategory, {
        Type: ModConfigMenuOptionType.BOOLEAN,
        CurrentSetting: () => config[id],
        Display: () => `${item.Name}: ${config[id] ? "On" : "Off"}`,
        OnChange: (newValue: boolean | number) => {
          config[id] = newValue as boolean;
        },
        Info: [`Quality: ${item.Quality}`, item.Description],
      });
    }
  }
}

// get the sorting text for the menu item - probably a better way of doing this
function getSorting(): string {
  const str = "Alphabetical [A-Z]";
  if (g.sorting === 2) {
    return "Alphabetical [Z-A]";
  }
  if (g.sorting === 3) {
    return "Quality [High-Low]";
  }
  if (g.sorting === 4) {
    return "Quality [Low-High]";
  }
  return str;
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
  ModConfigMenu.AddSpace(CATEGORY_NAME, INFO_PANEL);

  // add a setting for allowing us to sort the settings by user preference
  ModConfigMenu.AddSetting(CATEGORY_NAME, INFO_PANEL, {
    Type: ModConfigMenuOptionType.NUMBER,
    Minimum: 1,
    Maximum: 4,
    CurrentSetting: () => g.sorting,
    Display: () => `Menu Sort Order: ${getSorting()}`,
    OnChange: (newValue: boolean | number) => {
      g.sorting = newValue as number;
    },
    Info: [
      "Menu Sort Order",
      "This setting takes effect when you restart the game.",
    ],
  });
}
