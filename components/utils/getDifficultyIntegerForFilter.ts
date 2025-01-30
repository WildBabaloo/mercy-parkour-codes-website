export function GetDifficultyIntegerForFilter(difficulty: string) {
    switch (difficulty) {
        case "Multi Difficulty":
            return [0];
        case "Beginner":
            return [1, 2];
        case "Easy":
            return [2, 3, 4];
        case "Low Intermediate":
            return [4, 5, 6];
        case "Intermediate":
            return [6, 7, 8];
        case "High Intermediate":
            return [8, 9, 10];
        case "Hard":
            return [10, 11, 12];
        case "Very Hard":
            return [12, 13, 14];
        case "Expert":
            return [14, 15, 16];
        case "Super Expert":
            return [16, 17];
        default:
            return [];
    }
}