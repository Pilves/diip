const poem = [
    // Introduction
    { type: 'title', text: 'The Eternal Circle' },
    { type: 'pause', duration: 3000 },
    // Stanza: Flow...
    { type: 'title', text: 'Flow...' },
    { type: 'line', text: 'Pure essence, whole and free' },
    { type: 'line', text: 'Transcending words, forms, thought' },
    { type: 'line', text: 'Silent realm where all is one...' },
    { type: 'line', text: 'Echoing on, ever-present now' },
    { type: 'pause', duration: 4000 },
    // Stanza: Present...
    { type: 'title', text: 'Present...' },
    { type: 'line', text: 'Mind falls quiet, being still' },
    { type: 'line', text: 'Truth beyond separate self' },
    { type: 'line', text: 'Peace, purity, wholeness remain...' },
    { type: 'line', text: 'In the depths of timeless grace' },
    { type: 'pause', duration: 4000 },
    // Stanza: Void...
    { type: 'title', text: 'Void...' },
    { type: 'line', text: 'Infinite, formless ground' },
    { type: 'line', text: 'All rests, luminous light shines' },
    { type: 'line', text: 'Self dissolves, truth emerges...' },
    { type: 'line', text: 'Formless source, the heart of all' },
    { type: 'pause', duration: 4000 },
    // Stanza: Presence...
    { type: 'title', text: 'Presence...' },
    { type: 'line', text: 'Eternal, boundless awareness' },
    { type: 'line', text: '"Breadcrumbs" lead us home' },
    { type: 'line', text: 'Nothing needed, truth ever-present...' },
    { type: 'line', text: 'Here, now, the only path to take' },
    { type: 'pause', duration: 4000 },
    // Stanza: Eternal...
    { type: 'title', text: 'Eternal...' },
    { type: 'line', text: 'Timeless "game," seamless "dance"' },
    { type: 'line', text: 'Self discovering its own source' },
    { type: 'line', text: 'Full truth - nothing ever moved...' },
    { type: 'line', text: 'Beginningless, endless, complete' },
    { type: 'pause', duration: 4000 },
    // Stanza: Wonderland...
    { type: 'title', text: 'Wonderland...' },
    { type: 'line', text: 'Rabbit guides, madness to wisdom' },
    { type: 'line', text: 'Traversing time, mind, forms' },
    { type: 'line', text: 'Reality bends, path opens wide...' },
    { type: 'line', text: 'Down the rabbit hole, truth awaits' },
    { type: 'pause', duration: 4000 },
    // Stanza: Falling...
    { type: 'title', text: 'Falling...' },
    { type: 'line', text: 'Surrendering to rabbit\'s lead' },
    { type: 'line', text: 'Through wonder, past self, mind' },
    { type: 'line', text: 'Truth shines, light flows, path calls...' },
    { type: 'line', text: 'Ever deeper, forms fade away' },
    { type: 'pause', duration: 4000 },
    // Stanza: Light Envelops...
    { type: 'title', text: 'Light Envelops...' },
    { type: 'line', text: 'Self, mind, all forms dissolving' },
    { type: 'line', text: 'Void, truth, light emerging' },
    { type: 'line', text: 'No self, no mind, just "this"...' },
    { type: 'line', text: 'Luminous presence, boundless, clear' },
    { type: 'pause', duration: 4000 },
    // Stanza: Awakening...
    { type: 'title', text: 'Awakening...' },
    { type: 'line', text: 'Being flows, shines, truth glows' },
    { type: 'line', text: 'Boundaries dissolve, one with all' },
    { type: 'line', text: 'Eternal circle - nothing moved...' },
    { type: 'line', text: 'Home at last, the dance complete' },
    { type: 'pause', duration: 5000 },
];

let currentIndex = 0;

function displayNext() {
    if (currentIndex < poem.length) {
        const container = document.getElementById('poem-container');
        const item = poem[currentIndex];

        if (item.type === 'pause') {
            // Wait for the specified duration before displaying the next item
            setTimeout(() => {
                currentIndex++;
                displayNext();
            }, item.duration);
        } else {
            const element = document.createElement('div');

            if (item.type === 'title') {
                element.className = 'stanza-title';
                element.innerText = item.text;
                container.appendChild(element);

                // Trigger the fade-in effect
                setTimeout(() => {
                    element.style.opacity = 1;
                }, 100);

                currentIndex++;
                setTimeout(displayNext, 3000); // Pause after title
            } else if (item.type === 'line') {
                element.className = 'line';
                element.innerText = '';
                container.appendChild(element);

                // Display words one by one
                const words = item.text.split(' ');
                let wordIndex = 0;

                function displayWord() {
                    if (wordIndex < words.length) {
                        element.innerText += words[wordIndex] + ' ';
                        wordIndex++;
                        setTimeout(displayWord, 400); // Time between words
                    } else {
                        // After all words are displayed, proceed to the next item
                        element.style.opacity = 1;
                        currentIndex++;
                        setTimeout(displayNext, 2000); // Pause after line
                    }
                }

                displayWord();
            }
        }
    }
}

window.onload = function() {
    setTimeout(displayNext, 2000); // Initial delay before starting
};
