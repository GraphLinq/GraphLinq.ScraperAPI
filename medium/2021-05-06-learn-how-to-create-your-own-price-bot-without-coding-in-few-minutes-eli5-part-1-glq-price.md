---
url: https://medium.com/@graphlinq/learn-how-to-create-your-own-price-bot-without-coding-in-few-minutes-eli5-part-1-glq-price-c8402b660f2b
canonical_url: https://medium.com/@graphlinq/learn-how-to-create-your-own-price-bot-without-coding-in-few-minutes-eli5-part-1-glq-price-c8402b660f2b
title: Learn How to Create your Own Price Bot Without Coding in Few Minutes [ELI5]
  (Part 1 — #GLQ Price…
subtitle: ""
slug: learn-how-to-create-your-own-price-bot-without-coding-in-few-minutes-eli5-part-1-glq-price
description: ""
tags:
- graphlinq
- no-code
- blockchain
- crypto-price-bot
- telegram-price-bot
author: GraphLinq
username: graphlinq
---

# Learn How to Create your Own Price Bot Without Coding in Few Minutes [ELI5] (Part 1 — #GLQ Price Bot)

[![Youtube](https://img.youtube.com/vi/RYB_xHMvmcY/hqdefault.jpg)](https://www.youtube.com/watch?v=RYB_xHMvmcY)

So the first thing that we got to do is download the telegram. And since I’m going to be using my iPhone, I’m going to download telegram from the app store. If you want to download telegram for any of your other devices, you can do so by going to telegram.org.

Okay so once you have telegram installed, click on “start messaging”, enter your cell phone number that you’ll be using.

Since I have the telegram app on my pc The verification code will be sent there, but for the new telegram users the code will be sent to your phone or email.

**Step 1**: **Create a new bot with @botfather on telegram & get your API token**

Once you got the telegram app working on our phone. Now tap on the top right corner and click on the new group.

Go ahead and add the people that you want for your new group.

Type in your group name.

Okay. Awesome. Now we’ve successfully created a new group.

Now go ahead and type in @botfather and then hit the send arrow

Click on the “@bot father” message. Real quick, So what exactly is bot father? Bot father is a bot that creates new bots and manages existing bots.

All right. Go ahead and type in backslash start.

Now these are a bunch of commands that bot father provide you with, for the bots that you create.

Since we are creating bot click on /newbot.

Okay Now we get to name our bot, type in a name for it.

I’m going to name mine “Graphlinq test”

great, now we have to make a username for the bot that we just made. We will be using this username to call or add our bot in the future. So make it memorable.

There are some constraints for our username. We cant have any spaces, we have to choose a username that hasn’t been taken already and we have to make sure that our bots username ends with the word bot. So get creative guys!

Congrats guys you’ve made a new bot.

Now Below is the whole reason why we did this, is your bot’s API token. Make sure you don’t share this token with anyone. Keep it secure because if anyone has access to this bot it could get compromised. Which is exactly why we have our’s blacked out in the video.

Now lets go ahead and copy this token by taping on to the message. We are copying this token because we are going to use it later for graphlinqs telegram bot that’s on the ide.

Now we need to make sure our bots privacy settings are enabled so we can send backslash messages to our bot from graphlinqs ide.

Type in /setprivacy

Go ahead and hit enable.

Perfect.

Our bot is fully set up, now all we need to do is add our bot into our newly created group.

**Step 2: Add your newly created bot to your telegram group**

Head back over to the group that you just made. At the top where it says add members, tap that.

if you’re on your computer it should be the three buttons on the top right corner.

Enter the user name of your bot, and add it onto the group.

**Step 3: Load & Deploy GLQ Price Bot Template On GraphLinq IDE.**

Now let’s go back to Graphlinq’s homepage Graphlinq.io

Click on go to [interface](https://app.graphlinq.io).

Log into your wallet, and if you don’t know how to do that, check out this video:

[![Youtube](https://img.youtube.com/vi/7qRpxtXqzmI/hqdefault.jpg)](https://www.youtube.com/watch?v=7qRpxtXqzmI)

Watch this entire video before going forward.

This is the dashboard interface its where you can see all of your graph that are connected to your account so you can access them, we will get more into this in another tutorial

But for now Click on “make a graph” at the top left corner

Now these are all the current templates that have been made by the graphlinq developers

A lot more templates are underway but for now lets click on the template at the bottom that is labeled Bot telegram giving live price from uniswap.

Click on “Go to IDE”

Excellent guys we are now in GraphLinq’s IDE, I know, I know there a lot going on

But real quick lets make sure that you’re logged in

At the top right corner and you’ll know if you are if you see your wallets address, if so you’re good, if not tap on connect to wallet.

Now using your mouse, Click and Hold right mouse click and you so you can move around in the ide. Try not to mess with any the text or delete any of the blocks. You could mess up the connection of your graph. Just simply look around

To briefly explain what’s going on, you are seeing a bunch of blocks on the IDE that are connected together retrieving data from uniswap, coingecko and etherscan. All of the collected data gets sent to your telegram bot. I know it’s overwhelming but trust me. It’s actually very intuitive a lot easier to understand and less of an eye sore than regular code.

Okay so lets hold our right mouse click and move over to the bottom left corner over to where it says telegram bot.

This right here is essentially your telegram bot and over to the left where it says string and underneath says value you’ll see an empty text box with three imaginary dots in it go ahead and paste you “Telegram Bot’s API token” into the string block so hit CONTROL/COMMAND V.

Now move your mouse to the top left corner and hover over execution.

Click on launch.

Now our graph is processing, you’ll know if everything has worked properly if you don’t receive any red error messages at the bottom right corner of the terminal.

We can actually verify to see if our graph is live if we go back to the dashboard interface.

Now you could go back to the home page and tap on interface, or you could tap right here where it says documentation then parallel of dashboard interface is the link app.grpghlinq.io click that, log back in if you need to.

Now click on graphs and yup, we are live you can see the green dot which means its running.

Okay now for the fun part, lets go back into our newly created group in telegram.

Now type in /glq

Volla a live price update of the glq token powerd by graphlinq. Amazing, isn’t it?

Okay well that concludes our tutorial, but real quick I want to show you guys something,

Lets hop back into the IDE

Now remember when we doubled checked to make sure our bots privacy settings were enabled, this is why right here is what triggers the entire graph to work

/glq is all that we need to type. And boom you get your live update in telegram.

Now don’t change this text and think you can get any token in uniswap. because the graph simply won’t work, you’re going to have to change a couple of other things so that it retrieves the corresponding data to get the given token,

And for that we will have to save for the next tutorial video, in which we will show you how you can retrieve any token from uniswap using the telegram bot that we just made.

Also btw, as of writing this article, deploying graphs on GraphLinq IDE is free, so go get your bots deployed now!

Happy Graphing!


