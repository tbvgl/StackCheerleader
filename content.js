function replaceMinusWithPlusInVotes() {
    const voteCounts = document.querySelectorAll('.js-vote-count');

    for (const voteCount of voteCounts) {
        const voteValue = parseInt(voteCount.getAttribute('data-value'), 10);

        if (voteValue < 0) {
            const positiveVoteValue = Math.abs(voteValue);
            voteCount.textContent = `+${positiveVoteValue}`;
        }
    }
}

function applyStyles() {
    const styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
}

applyStyles();
replaceMinusWithPlusInVotes();