// swupManager.js
import Swup from 'swup';

export function initSwup(onContentReplaced) {
    const swup = new Swup();

    // Setup event listener for content replacement
    swup.on('contentReplaced', () => {
        if (onContentReplaced) {
            onContentReplaced();
        }
    });

    return swup;
}
