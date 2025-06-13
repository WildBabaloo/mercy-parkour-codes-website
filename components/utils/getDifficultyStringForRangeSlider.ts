export function getDifficultyStringForRangeSlider(difficultyNumber: number) {
    switch (difficultyNumber) {
        case 1:
            return "Beginner";
        case 3:
            return "Easy";
        case 5:
            return "Low Intermediate";
        case 7: 
            return "Intermediate";
        case 9:
            return "High Intermediate";
        case 11:
            return "Hard";
        case 13:
            return "Very Hard";
        case 15:
            return "Expert";
        case 17:
            return "Super Expert";
        default:
            return "If you get this then something went wrong bruh.."
    }
}