export function GetDifficultyColor(difficulty: string) {
    switch (difficulty) {
        case "Beginner":
            return "text-beginner-cyan";
        case "Beginner / Easy":
            return "text-beginner/easy-light-cyan";
        case "Easy":
            return "text-easy-light-lime-green";
        case "Easy / Low Intermediate":
            return "text-easy/low-inter-lime-green";
        case "Low Intermediate":
            return "text-low-inter-desaturated-green";
        case "Low Intermediate / Intermediate":
            return "text-low-inter/inter-desaturated-yellow";
        case "Intermediate":
            return "text-intermediate-yellow";
        case "Intermediate / High Intermediate":
            return "text-inter/high-inter-vivid-orange";
        case "High Intermediate":
            return "text-high-inter-orange";
        case "High Intermediate / Hard":
            return "text-high-inter/hard-dark-orange";
        case "Hard":
            return "text-hard-red";
        case "Hard / Very Hard":
            return "text-hard/very-hard-dark-pink";
        case "Very Hard":
            return "text-very-hard-soft-blue";
        case "Very Hard / Expert":
            return "text-very-hard/expert-bright-violet";
        case "Expert":
            return "text-expert-violet";
        case "Expert / Super Expert":
            return "text-expert/super-expert-vivid-violet";
        case "Super Expert":
            return "text-super-expert-vivid-magenta";
        default:
            return "text-gray-400";
    }
}