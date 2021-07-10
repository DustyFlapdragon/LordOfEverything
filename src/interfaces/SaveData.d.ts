// our SaveData interface, this is probably overkill at this point
// but we might want to add something else at a later date
export default interface SaveData {
  itemsConfig: { [id: string]: boolean };
  trinketsConfig: { [id: string]: boolean };
}
