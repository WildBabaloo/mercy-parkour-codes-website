export function GetDifficultyIntegerForFilter(difficulty: string) {
    switch (difficulty) {
        case "Multi Difficulty":
            return [0];
        case "Beginner":
            return [1];
        case "Beginner / Easy":
            return [2];
        case "Easy":
            return [3];
        case "Easy / Low Intermediate":
            return [4];
        case "Low Intermediate":
            return [5];
        case "Low Intermediate / Intermediate":
            return [6];
        case "Intermediate":
            return [7];
        case "Intermediate / High Intermediate":
            return [8];
        case "High Intermediate":
            return [9];
        case "High Intermediate / Hard":
            return [10];
        case "Hard":
            return [11];
        case "Hard / Very Hard":
            return [12];
        case "Very Hard":
            return [13];
        case "Very Hard / Expert":
            return [14];
        case "Expert":
            return [15];
        case "Expert / Super Expert":
            return [16];
        case "Super Expert":
            return [17];
        default:
            return [];
    }
}