import * as saveData from "../saveData";

// save our ModConfigMenu settings before we exit
export function main(): void {
  saveData.save();
}
