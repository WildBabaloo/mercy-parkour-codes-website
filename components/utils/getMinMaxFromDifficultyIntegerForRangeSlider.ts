export function getMinMaxFromDifficultyIntegerForRangeSlider(difficultyRangeString: string) {
    const difficultyRangeArray = difficultyRangeString.split("-").map(Number);
    let min = 1;
    let max = 17;
    if (!difficultyRangeArray) { return [min, max]; }

    if (difficultyRangeArray[0] >= 1 && difficultyRangeArray[0] <= 17) {
        min = difficultyRangeArray[0] % 2 === 1 ? difficultyRangeArray[0] : difficultyRangeArray[0] - 1;
    }

    if (difficultyRangeArray[1] >= 1 && difficultyRangeArray[1] <= 17) {
        max = difficultyRangeArray[1] % 2 === 1 ? difficultyRangeArray[1] : difficultyRangeArray[1] + 1;
    }

    return [min, max];
}