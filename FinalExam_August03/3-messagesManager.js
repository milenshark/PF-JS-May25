function messagesManager(input) {
    let inboxCapacity = Number(input.shift());
    let userRegistry = {};

    for (let entry of input) {
        if (entry === "Statistics") break;

        let [command, param1, param2, param3] = entry.split("=");

        if (command === "Add") {
            let handle = param1;
            let sentMsgs = Number(param2);
            let receivedMsgs = Number(param3);

            if (!userRegistry.hasOwnProperty(handle)) {
                userRegistry[handle] = { sent: sentMsgs, received: receivedMsgs };
            }

        } else if (command === "Message") {
            let sender = param1;
            let receiver = param2;

            if (userRegistry.hasOwnProperty(sender) && userRegistry.hasOwnProperty(receiver)) {
                userRegistry[sender].sent++;
                userRegistry[receiver].received++;

                if (userRegistry[sender].sent + userRegistry[sender].received >= inboxCapacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete userRegistry[sender];
                }

                if (userRegistry[receiver] && userRegistry[receiver].sent + userRegistry[receiver].received >= inboxCapacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete userRegistry[receiver];
                }
            }

        } else if (command === "Empty") {
            let targetUser = param1;

            if (targetUser === "All") {
                userRegistry = {};
            } else {
                delete userRegistry[targetUser];
            }
        }
    }

    console.log(`Users count: ${Object.keys(userRegistry).length}`);

    for (let [username, stats] of Object.entries(userRegistry)) {
        let totalMsgs = stats.sent + stats.received;
        console.log(`${username} - ${totalMsgs}`);
    }
}



messagesManager(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);
