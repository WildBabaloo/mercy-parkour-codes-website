export function GetDifficultyIntegerForRangeSlider(difficultyRange: string) { 
    const difficultyRangeArray = difficultyRange.split("-").map(Number);

    if (!difficultyRangeArray) { return []; }
    // if (difficultyRangeArray[0] === difficultyRangeArray[1]) { return [difficultyRangeArray[0]]; }
    const minDifficultyInteger = difficultyRangeArray[0] === 1 ? difficultyRangeArray[0] : difficultyRangeArray[0] - 1;
    const maxDifficultyInterger = difficultyRangeArray[1] === 17 ? difficultyRangeArray[1] : difficultyRangeArray[1] + 1;
    const difficultyIntegersArray: number[] = [];

    for (let i = minDifficultyInteger; i <= maxDifficultyInterger; i++) { difficultyIntegersArray.push(i); }

    console.log(difficultyIntegersArray);
    return difficultyIntegersArray;
}