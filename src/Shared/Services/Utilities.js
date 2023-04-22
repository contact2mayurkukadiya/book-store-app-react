export function getShades(hexCode, weight) {
    // Convert hex code to RGB values
    const red = parseInt(hexCode.slice(1, 3), 16);
    const green = parseInt(hexCode.slice(3, 5), 16);
    const blue = parseInt(hexCode.slice(5, 7), 16);

    // Calculate original RGB values at 50% weight
    var nred, ngreen, nblue;
    if (weight < 0.5) {
        // Calculate light RGB values based on weight
        nred = Math.round(red + (255 - red) * (0.5 + weight * 0.5));
        ngreen = Math.round(green + (255 - green) * (0.5 + weight * 0.5));
        nblue = Math.round(blue + (255 - blue) * (0.5 + weight * 0.5));
    } else if (weight === 0.5) {
        nred = Math.round(red + (255 - red) * 0.5);
        ngreen = Math.round(green + (255 - green) * 0.5);
        nblue = Math.round(blue + (255 - blue) * 0.5);
    } else {
        // Calculate dark RGB values based on weight
        nred = Math.round(red * (1 - weight * 0.5));
        ngreen = Math.round(green * (1 - weight * 0.5));
        nblue = Math.round(blue * (1 - weight * 0.5));
    }

    return `#${nred.toString(16)}${ngreen.toString(16)}${nblue.toString(16)}`;
}