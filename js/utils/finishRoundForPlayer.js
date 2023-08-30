const finishRoundForPlayer = () => {
    if (win77.router.matchmaking && win77.lobby.size > 0) {
        let nextPlayerIndex;
        win77.router.playersQueue.forEach((playerId, currentPlayerIndex) => {
            if (playerId === win77.router.currentPlayer) {
                if (currentPlayerIndex === win77.router.playersQueue.length - 1) {
                    nextPlayerIndex = 0;
                    win77.game.round = win77.game.round + 1;
                } else {
                    nextPlayerIndex = currentPlayerIndex + 1;
                }
            }
        });
        const nextPlayerId = win77.router.playersQueue[nextPlayerIndex];
        win77.switchPlayer(nextPlayerId);
    } else {
        win77.game.round = win77.game.round + 1;
    }
}

export { finishRoundForPlayer };
