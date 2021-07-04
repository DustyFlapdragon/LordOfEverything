import g from "../globals";

// set the global player after initialization
export function main(player: EntityPlayer): void {
  g.p = player;
}
