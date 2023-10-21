const giveIncomeTo = (id, income) => {
    const receiver = Array.from(win77.lobby).find((player) => player.id === id);
    if (receiver) {
        receiver.balance.bankroll = receiver.balance.bankroll + income;
        console.log(`You give ${income} to ${id}`);
    } else {
        console.log(`${receiver} does not exist`);
    }
}

export { giveIncomeTo };
