---
url: https://medium.com/@graphlinq/how-to-create-your-first-graph-on-graphlinq-protocol-63eaafda016
canonical_url: https://gist.github.com/nightwolf93/a9f0df182dca15cec6542a0a7fdeddd3
title: How To Create Your First Graph on Graphlinq Protocol
subtitle: First, thanks a lot for being part of GraphLinq. Today, we will explain
  you how to make your first Graph on the GraphLinq IDE.
slug: how-to-create-your-first-graph-on-graphlinq-protocol
description: ""
tags:
- graphlinq
- defi
- blockchain
- automation-blockchain
- crypto
author: GraphLinq
username: graphlinq
---

# How To Create Your First Graph on Graphlinq Protocol

![][image_ref_MSpRNlZIUnFNT2loS0xiVkIxTHlxVl9RLnBuZw==]

First, thanks a lot for being part of GraphLinq. Today, we will explain you **how to make your first Graph on the GraphLinq IDE**.

GraphLinq IDE is a powerful interface that allow your to create your workflow as a **Graph**, this interface is available at [https://ide.graphlinq.io](https://ide.graphlinq.io) and it’s **free to use** even if you host your own GraphLinq Engine.

You can have access to the source code of the IDE here :
[https://github.com/GraphLinq/GraphLinq.IDE](https://github.com/GraphLinq/GraphLinq.IDE)

**Lets me introduce the interface and how to use it**

![][image_ref_MCo3RWFSeXptcm43MV9rYU1L]

As you can see when you launch for the first time the IDE, the IDE will create an empty graph for you.

On the left side you have the **Toolbox** where you can find all available logical block that you can use to create your graph. You can use the search bar to find the block you need, for example if you type “telegram” you will find all blocks for Telegram.

![][image_ref_MCpCMkFEUGhBT25CdDd1ZGYx]

To add a block in your graph just click on it and the block will appear in the middle of graph. You can move it as you want into the workspace.

At the bottom of the IDE you can find the terminal. This terminal allow you to know what IDE does like for example if you deploy a graph you will the hash and the result of the deployment.

![][image_ref_MCo0VG82SFhCRm81OE5LWmYy]

You will also be able to see all “logs” that the graph print. There is a “Print” block available in the toolbox that allow to write in it in real time.

If there is error in your graph you will see it in the terminal too, as simple as that!

At the top of the IDE you can find the menu, when you move your cursor on each menu, there is a submenu too.

![][image_ref_MCp2QUR6SXFhcUV3bEtLaTJi]

**File Menu**
 In this menu you have the choice to :

* Create a new graph

* Load a graph from a file

* Save the graph in your browser

* Save the graph as file

**Execution**
There is only one option in this menu, the “Launch” option, that will allow you to deploy your graph on the engine and test it.
**If you want to launch your graph, you’ll have to connect to your web3 wallet first, you can do it with the “Connect To Wallet” button at the top right side of the IDE**

[**Documentation**](http://docs.graphlinq.io)
[**Help**](http://t.me/graphlinq)

This is where all the graph creation will take place, where you can move and connect blocks for making your workflow.

![][image_ref_MCpSdWZVVUt3Z2pQbWFWUERz]

As in GraphLinq you can have access to Uniswap Events, that allow to track for example every swap for a pair. In this example we will make & deploy a graph to create an alert if someone buys more than 1 Ether of GLQ on the GLQ-ETH pair.

To be able to track swaps on Uniswap you will have to add a “On Uniswap Swap” block to your graph, search it in the toolbox and add the block.

![][image_ref_MCp2bVhZZDNCOFhHOU1FcFp5]

How does a Block work?

At the left side you have “Input Parameters”, this block need an Ethereum Connection and a Contract Address as input.

So we will provide to this block what it needs. Search for Ethereum Connector and String in the toolbox and add them on the graph. Simply connect them by clicking on each output parameter (circle) in each block like in the image below.

![][image_ref_MCpVQV9EQy1nWHQ4anhaQ1RD]

As you can see some parameters have different colors. Each color determined the type of blocks:

(i) The **yellow dot is an execution parameter**. When you connect an “Output” execution parameter to an “Input” execution parameter, the “Output” block is executed after the “input” block.

(ii) Blue Block is a “Connector Block”

(iii) Orange Block is an “Event Block” and the

(iv)**** Green Block is a “Variable Block”**** where you can edit the output parameter directly on the IDE.

In the image above you can see that in “String” parameter, I’ve put the address of the Uniswap Pair which I want to monitor. In this example it’s the GLQ-ETH pair. So I am putting this address: **0x7d9c8d888d03df89461c645bd1108ae138b63a2a**

You can delete a block with the cross icon when you have your cursor on the block header. To delete a connection you need to right click on a connection dot.

To be able to filter only the transactions we want, we will use “Branches.” Branches are special blocks that allows us to have condition on output parameters.

Next, we will use a Decimal Branch to check if any wallet has bought more than 1 ether worth of GLQ on Uniswap.

![][image_ref_MCptY2dxZ1VHalhqZm9FOUQz]

You can connect the two variable that you want to compare at the “Left Side” of the block (Input Parameters) and execute the block you want with condition symbol on the “Right Side” (Output Execution Parameters)

Connect them like in the image below:

![][image_ref_MCpUWWthanE2eHFfNzN4UFNj]

In this condition we will check if “Amount1In” >= 1.

After the branch condition you can execute any block you want, that includes a Telegram Message from your bot, Discord message, Tweet or push notification.

We will now link the “>=” condition to a “Print” block. This block allow you to write into the terminal of the GraphLinq IDE and to save text in your dashboard logs.

Just search for “Print” in the toolbox and add it and link it to the “>=” condition.

![][image_ref_MCpEREl0VVRXdVJqdWxIMXZ6]

You can add in the message: the amount, sender, by using the “Replace String in String” block.

Now to be able to launch your Graph you need to be logged in first on the top right of the IDE.
After that just click on “Launch” in the “Execution” menu and wait for the deployment.

After a couple of seconds you will see in your terminal that the graph has been deployed. You get the “Hash” of the graph & will see logs appearing too.

![][image_ref_MCpWT3FramFnVDQ4X3FZR3lK]

You can also check your running graph on our dashboard [https://app.graphlinq.io/app/graphs](https://app.graphlinq.io/app/graphs).

![][image_ref_MCpkUDdzTml5TGtUVXFjblFH]

# Congrats, you just made your first Graph on GraphLinq Protocol🎉

Now that you understand how to use the GraphLinq IDE, you can play around it for **FREE** for now.
We will announce when you will need GLQ tokens to run them, these GLQ token will be burned each time the graph execute one block. You can get more informations about the GLQ token here [https://docs.graphlinq.io/token](https://docs.graphlinq.io/token)

Happy Graphing!

*Originally published at [http://github.com](https://gist.github.com/nightwolf93/a9f0df182dca15cec6542a0a7fdeddd3).*


[image_ref_MSpRNlZIUnFNT2loS0xiVkIxTHlxVl9RLnBuZw==]: data:image/png;base64,
[image_ref_MCo3RWFSeXptcm43MV9rYU1L]: data:application/octet-stream;base64,
[image_ref_MCpCMkFEUGhBT25CdDd1ZGYx]: data:application/octet-stream;base64,
[image_ref_MCo0VG82SFhCRm81OE5LWmYy]: data:application/octet-stream;base64,
[image_ref_MCp2QUR6SXFhcUV3bEtLaTJi]: data:application/octet-stream;base64,
[image_ref_MCpSdWZVVUt3Z2pQbWFWUERz]: data:application/octet-stream;base64,
[image_ref_MCp2bVhZZDNCOFhHOU1FcFp5]: data:application/octet-stream;base64,
[image_ref_MCpVQV9EQy1nWHQ4anhaQ1RD]: data:application/octet-stream;base64,
[image_ref_MCptY2dxZ1VHalhqZm9FOUQz]: data:application/octet-stream;base64,
[image_ref_MCpUWWthanE2eHFfNzN4UFNj]: data:application/octet-stream;base64,
[image_ref_MCpEREl0VVRXdVJqdWxIMXZ6]: data:application/octet-stream;base64,
[image_ref_MCpWT3FramFnVDQ4X3FZR3lK]: data:application/octet-stream;base64,
[image_ref_MCpkUDdzTml5TGtUVXFjblFH]: data:application/octet-stream;base64,
