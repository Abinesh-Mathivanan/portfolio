document.addEventListener('DOMContentLoaded', function () {
    const spans = ['binaryText', 'revert', 'final'];
    const replacementString = "I'm Abinesh Mathivanan,currently merging Computer Science, Physics, and Humans.";

    function executeTransformation(spanIndex, charIndex) {
        const currentSpanId = spans[spanIndex];
        const currentSpan = document.getElementById(currentSpanId);

        const currentChar = currentSpan.textContent[charIndex];

        if (currentChar === '0' || currentChar === '1') {
            const newBinaryDigit = currentChar === '0' ? '1' : '0';

            const updatedText = currentSpan.textContent.substring(0, charIndex) +
                replacementString[(charIndex + spans.slice(0, spanIndex).reduce((acc, span) => acc + document.getElementById(span).textContent.length, 0)) % replacementString.length] +
                currentSpan.textContent.substring(charIndex + 1);

            currentSpan.textContent = updatedText.replace(currentChar, newBinaryDigit);

            setTimeout(() => executeTransformation(spanIndex, charIndex + 1), 30); // Character render speed
        } else {
            if (charIndex >= currentSpan.textContent.length - 1) {
                setTimeout(() => executeTransformation(spanIndex + 1, 0), 100); // line shift time
            }
        }
    }

    executeTransformation(0, 0);
});
