import { storeToRefs } from "pinia";

export function getCountPercentage(upCount: number, downCount: number) {
  const max = Math.max(upCount, downCount);
  const min = Math.min(upCount, downCount);

  if (upCount === downCount && downCount === 0) {
    return {
      upPercentage: 1,
      downPercentage: 1,
      upSinglePercentage: 0,
      downSinglePercentage: 0,
    };
  }

  return {
    upPercentage: upCount / (upCount + downCount),
    downPercentage: downCount / (upCount + downCount),
    upSinglePercentage: upCount === max ? 1 : min / max,
    downSinglePercentage: downCount === max ? 1 : min / max,
  };
}

export function getVoteType(content: string) {
  const { upTriggerWord, downTriggerWord } = storeToRefs(useAppStore());
  const upRegExp = new RegExp(`^${upTriggerWord.value}+$`);
  const downRegExp = new RegExp(`^${downTriggerWord.value}+$`);
  if (upRegExp.test(content)) {
    return "up";
  } else if (downRegExp.test(content)) {
    return "down";
  }
  return undefined;
}
