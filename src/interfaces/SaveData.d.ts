// our SaveData interface, this is probably overkill at this point
// but we might want to add something else at a later date
export default interface SaveData {
  config: { [id: string]: boolean };
}
