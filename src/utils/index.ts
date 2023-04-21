export function getCountPercentage(positiveCount: number, negativeCount: number) {
  const max = Math.max(positiveCount, negativeCount);
  const min = Math.min(positiveCount, negativeCount);

  if (positiveCount === negativeCount && positiveCount === 0) {
    return {
      positivePercentage: 1,
      negativePercentage: 1,
      positiveSinglePercentage: 0,
      negativeSinglePercentage: 0,
    };
  }

  return {
    positivePercentage: positiveCount / (positiveCount + negativeCount),
    negativePercentage: negativeCount / (positiveCount + negativeCount),
    positiveSinglePercentage: positiveCount === max ? 1 : min / max,
    negativeSinglePercentage: negativeCount === max ? 1 : min / max,
  };
}
