---
url: https://medium.com/@graphlinq/create-issue-your-own-token-on-the-ethereum-or-bsc-network-with-graphlinq-a9f0f7c5c93a
canonical_url: https://medium.com/@graphlinq/create-issue-your-own-token-on-the-ethereum-or-bsc-network-with-graphlinq-a9f0f7c5c93a
title: Create & issue your own token on the Ethereum or BSC Network with GraphLinq
subtitle: 'Greetings everyone! Today we achieved two big milestones in our development
  roadmap: you can now create and issue your own ERC-20 and…'
slug: create-issue-your-own-token-on-the-ethereum-or-bsc-network-with-graphlinq
description: ""
tags:
- graphlinq
- no-code
- defi
- blockchain
- crypto
author: GraphLinq
username: graphlinq
---

# Create & issue your own token on the Ethereum or BSC Network with GraphLinq

![][image_ref_MSozNURyXzZGdWZkVnk2RXJ0QW5aWlJnLmpwZWc=]

Greetings everyone! Today we achieved two big milestones in our development roadmap: you can now create and issue your own ERC-20 and BEP-20 token only with few clicks on the [GraphLinq App](https://app.graphlinq.io/app/home), two options are available: directly through our interface or by modifying the template graph directly on the IDE and executing it.

### Managed Wallets

To broadcast Ethereum or Binance Smart Chain transactions you need a wallet on each chain, to make it happen we created on our online interface a management wallet system to create some and store them securely.

So, the first step is to create your managed wallet on the interface by going on “My Wallets” in the menu, then by just choosing a name for the wallet a new one will be made which is useable for both Ethereum and Binance Smart-Chain, **the private-key is given you one single time at creation, remember to save it.**

![Sample of a Wallet creation on the GraphLinq app.][image_ref_MSpiSXBqNjR2VGtjQUQzQ0NlVW01ZGx3LnBuZw==]

As you see, the newly created wallet doesn’t have any ETH or BNB on it, so it depends on what chain you want to deploy your new token: but you have to send ETH / BNB to your new wallet that will be used as a gas fee for the transaction broadcast.

The creation of a classic ERC-20 / BEP-20 token costs approximately an average of** 1,000,000 GAS** which at the current market price is **$106.**

You can use this tx calculator to check how much ETH you need to deposit for your contract deployment cost on the new wallet, which uses the current network price to base your estimation: [https://ethgasstation.info/calculatorTxV.php](https://ethgasstation.info/calculatorTxV.php).

You also can deposit more funds to feel safer on your transaction going through the network, be assured that only the required and needed amount will be used on your launched graph, now the last thing to do is to use the template on the home page of the interface to issue your token, using the wallet you just created and have put funds on:

![Template Token Creation][image_ref_MSpCUnp0MWYtY1BEbkZ4dVJpanVxc3JBLnBuZw==]

### **What are 18 decimals for my token supply?**

*Solidity **supports integers but no decimals**, so we have to multiply our amount of wanted tokens to have the correct amount of token created for the owner address: on this example, we create 500M tokens by doing this calculation:*

### ***500 000 000 * (10 ** 18)***

[-> More technicals details on this Medium Article](https://medium.com/cementdao/fixed-point-math-in-solidity-616f4508c6e8)

### **Flexible Graph access for Token Issuance**

![][image_ref_MSpseDltZWhqOHBvdFFVZmZ2M21VanlBLnBuZw==]

You can also use directly the graph to update it to your specific needs on the IDE through those links:

[> Graph for Creating and Issuing an ERC-20 Token (ETH)](https://ide.graphlinq.io/?loadGraph=28)
[> Graph for Creating and Issuing a BEP-20 Token (BSC)](https://ide.graphlinq.io/?loadGraph=29)

We also made a live sample video available on Youtube:

[![Youtube](https://img.youtube.com/vi/fuwFbM408Ys/hqdefault.jpg)](https://www.youtube.com/watch?v=fuwFbM408Ys)

Join Telegram Community: [https://t.me/graphlinq](https://t.me/graphlinq)

Follow us on Twitter: [https://twitter.com/graphlinq_proto](https://twitter.com/graphlinq_proto)


[image_ref_MSozNURyXzZGdWZkVnk2RXJ0QW5aWlJnLmpwZWc=]: data:image/jpeg;base64,
[image_ref_MSpiSXBqNjR2VGtjQUQzQ0NlVW01ZGx3LnBuZw==]: data:image/png;base64,
[image_ref_MSpCUnp0MWYtY1BEbkZ4dVJpanVxc3JBLnBuZw==]: data:image/png;base64,
[image_ref_MSpseDltZWhqOHBvdFFVZmZ2M21VanlBLnBuZw==]: data:image/png;base64,
