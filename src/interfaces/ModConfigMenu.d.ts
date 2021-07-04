/**
 * A typescript interface for ModConfigMenu {@link https://gitlab.com/Chifilly/bindingofisaac-modconfigmenu }
 * to be used with IsaacScript {@link https://isaacscript.github.io }
 * This interface is based on the one created by {@link https://github.com/Zamiell }
 *
 */
declare const ModConfigMenu: ModConfigMenuInterface;

/**
 * Define the various functions from ModConfig Menu
 */
declare interface ModConfigMenuInterface {
  /**
   * Create a boolean setting under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param configTableAttribute an attribute for the setting
   * @param defaultValue the default value of the setting
   * @param displayText text to be displayed for setting
   * @param displayValueProxies A table that denotes what text will be displayed based on the setting value as the index.
   * @param info Optional information for the setting
   * @param color
   */
  AddBooleanSetting(
    this: void,
    categoryName: string,
    subcategoryName: string,
    configTableAttribute: string,
    defaultValue: boolean,
    displayText: string,
    displayValueProxies: Record<string, string>,
    info?: string,
    color?: string,
  ): void;

  /**
   * Add a Controller keybinding setting.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param configTableAttribute an attribute for the setting
   * @param defaultValue the default value of the setting
   * @param displayText text to be displayed for setting
   * @param displayDevice This should be true to suffix the setting with (controller).
   * @param info Optional information for the setting
   * @param color
   */
  AddControllerSetting(
    this: void,
    categoryName: string,
    subcategoryName: string,
    configTableAttribute: string,
    defaultValue: ModConfigMenuController,
    displayText: string,
    displayDevice: boolean,
    info?: string[],
    color?: string,
  ): void;

  /**
   * Add a keyboard keybinding setting.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param configTableAttribute an attribute for the setting
   * @param defaultValue the default value of the setting
   * @param displayText text to be displayed for setting
   * @param displayDevice Whether the display text should be suffixed with the control device ((keyboard) or (controller)).
   * @param info Optional information for the setting
   * @param color
   */
  AddKeyboardSetting(
    this: void,
    categoryName: string,
    subcategoryName: string,
    configTableAttribute: string,
    defaultValue: Keyboard,
    displayText: string,
    displayDevice?: boolean,
    info?: string[],
    color?: string,
  ): void;

  /**
   * Add a number value setting under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param configTableAttribute an attribute for the setting
   * @param minValue The minimum setting value, used for AddNumberSetting
   * @param maxValue The maximum setting value, used for AddNumberSetting
   * @param modifyBy The number to modify the AddNumberSetting by
   * @param defaultValue the default value of the setting
   * @param displayText text to be displayed for setting
   * @param displayValueProxies A table that denotes what text will be displayed based on the setting value as the index.
   * @param info Optional information for the setting
   * @param color
   */
  AddNumberSetting(
    this: void,
    settingType: ModConfigMenuOptionType,
    categoryName: string,
    subcategoryName: string,
    configTableAttribute: string,
    minValue: number,
    maxValue: number,
    modifyBy: number,
    defaultValue: number | boolean,
    displayText: string,
    displayValueProxies: [],
    displayDevice: boolean,
    info?: string[],
    color?: string,
    functionName?: string,
  ): void;

  /**
   * Add a slider setting under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param configTableAttribute an attribute for the setting
   * @param defaultValue the default value of the setting
   * @param displayText text to be displayed for setting
   * @param info Optional information for the setting
   * @param color
   */
  AddScrollSetting(
    this: void,
    categoryName: string,
    subcategoryName: string,
    configTableAttribute: string,
    defaultValue: number | boolean,
    displayText: string,
    info?: string[],
    color?: string,
  ): void;

  /**
   * Add a new setting to the supplied category and subcategory with the provided data.
   * If the category/subcategory does not exist, create it
   * This is the default way to create settings, most other setting options utilise it
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param settingTable {@link ModConfigMenuSetting} A table of data for the setting.
   */
  AddSetting(
    this: void,
    categoryName: string,
    subcategoryName: string,
    settingTable: ModConfigMenuSetting,
  ): void;

  /**
   * Add a space to the mod config menu under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   */
  AddSpace(this: void, categoryName: string, subcategoryName: string): void;

  /**
   * Add text into the mod config menu under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param textFunction A function that returns a string
   */
  AddText(
    this: void,
    categoryName: string,
    subcategoryName: string,
    textFunction: () => string,
  ): void;

  /**
   * Add a title to the mod config menu under the provided category and subcategory.
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param text A string of text to be added
   * @param color optional colour apparently? @todo how the hell does this work, passing KColor doesn't work
   */
  AddTitle(
    this: void,
    categoryName: string,
    subcategoryName: string,
    text: string,
    color?: string,
  ): void;

  /**
   * Create a setting without using a table.
   * @param settingType the type of setting to add
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param configTableAttribute an attribute for the setting
   * @param minValue The minimum setting value, used for AddNumberSetting
   * @param maxValue The maximum setting value, used for AddNumberSetting
   * @param modifyBy The number to modify the AddNumberSetting by
   * @param defaultValue the default value of the setting
   * @param displayText text to be displayed for setting
   * @param displayValueProxies A table that denotes what text will be displayed based on the setting value as the index.
   * @param displayDevice Whether the display text should be suffixed with the control device ((keyboard) or (controller)).
   * @param info Optional information for the setting
   * @param color
   * @param functionName The name of the function it was called from (only used in error messages, and really only used internally).
   */
  SimpleAddSetting(
    this: void,
    settingType: ModConfigMenuOptionType,
    categoryName: string,
    subcategoryName: string,
    configTableAttribute: string,
    minValue: number,
    maxValue: number,
    modifyBy: number,
    defaultValue: number | boolean,
    displayText: string,
    displayValueProxies: [],
    displayDevice: boolean,
    info?: string[],
    color?: string,
    functionName?: string,
  ): void;

  /**
   * Remove the setting at the provided category, subcategory and attribute
   * @param categoryName Name of category on the left of ModConfigMenu
   * @param subcategoryName Name of the sub category on the tab list at the top of ModConfigMenu
   * @param settingAttribute an attribute for the setting
   */
  RemoveSetting(
    this: void,
    categoryName: string,
    subcategoryName: string,
    settingAttribute: string,
  ): void;

  /**
   * Retrieves the ID of a category
   * @param categoryName Name of category on the left of ModConfigMenu
   * @returns The ID of the categoryName provided or null if it does not exist
   */
  GetCategoryIDByName(categoryName: string): int | null;
}

/**
 * an Interface for the settings table
 * @noSelf There is no contextual parameter
 */
declare interface ModConfigMenuSetting {
  CurrentSetting: () => number | boolean;
  Attribute?: string | null;
  Display: () => string;
  Info: string[];
  OnChange: (newValue: number | boolean) => void;
  Type: ModConfigMenuOptionType;
}

/**
 * declare the option types
 * https://gitlab.com/Chifilly/bindingofisaac-modconfigmenu#optiontype
 */
declare const enum ModConfigMenuOptionType {
  TEXT = 1,
  SPACE = 2,
  SCROLL = 3,
  BOOLEAN = 4,
  NUMBER = 5,
  KEYBIND_KEYBOARD = 6,
  KEYBIND_CONTROLLER = 7,
  TITLE = 8,
}

/**
 * ModConfigMenu does its own thing for Controller so we cannot use enums.unofficial
 * @todo work on a change to MCM
 */
declare const enum ModConfigMenuController {
  DPAD_LEFT = 0,
  DPAD_RIGHT = 1,
  DPAD_UP = 2,
  DPAD_DOWN = 3,
  BUTTON_A = 4,
  BUTTON_B = 5,
  BUTTON_X = 6,
  BUTTON_Y = 7,
  BUMPER_LEFT = 8,
  TRIGGER_LEFT = 9,
  STICK_LEFT = 10,
  BUMPER_RIGHT = 11,
  TRIGGER_RIGHT = 12,
  STICK_RIGHT = 13,
  BUTTON_BACK = 14,
  BUTTON_START = 15,
}
