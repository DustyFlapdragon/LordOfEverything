import g from "./globals";

// function to check if the game is a standard new game and not Greed, a Challenge or continue
export function isNewStandardGame(isContinue: boolean): boolean {
  if (
    !g.g.IsGreedMode() &&
    g.g.Challenge === Challenge.CHALLENGE_NULL &&
    !isContinue
  ) {
    return true;
  }
  return false;
}
