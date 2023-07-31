---
url: https://medium.com/@graphlinq/graphlinq-ide-1-3-3-updates-livecoinwatch-telegram-engine-8b7c6c627290
canonical_url: https://medium.com/@graphlinq/graphlinq-ide-1-3-3-updates-livecoinwatch-telegram-engine-8b7c6c627290
title: GraphLinq IDE 1.3.3 Updates (LiveCoinWatch, Telegram, Engine)
subtitle: The team at GraphLinq is very excited to announce another round of updates
  to our no-code IDE. This update adds nine new blocks including a…
slug: graphlinq-ide-1-3-3-updates-livecoinwatch-telegram-engine
description: ""
tags:
- updated
author: GraphLinq
username: graphlinq
---

# GraphLinq IDE 1.3.3 Updates (LiveCoinWatch, Telegram, Engine)

![][image_ref_MCp6eFRtX3FzZTMxdWw4QWRJLnBuZw==]

The team at GraphLinq is very excited to announce another round of updates to our no-code IDE. This update adds nine new blocks including a new plugin for the GraphLinq Engine. There are now 280 blocks available in the GraphLinq IDE.

# New LiveCoinWatch Block

We’ve added a new block to our existing four LiveCoinWatch blocks. This fifth new block allows for fetching historical price, volume, market cap, and liquidity data over a period of time. This data can be used to generate charts, analyze changes over time, detect patterns, or be used in conjunction with any of the other blocks available in the IDE. The block is called `Fetch Single Coin History` and is intended to work with the rest of the updates being released today.

# New Telegram Blocks

Responses from your telegram bot are no longer limited to just text. These two new blocks allow you to respond to commands with just a photo, or a photo with a caption. The team at GraphLinq can already envision many uses for this new functionality and we hope you do too.

# New Timestamp Blocks

Four new blocks extend the functionality of the core GraphLinq Engine’s ability to work with timestamps. You can now generate a timestamp that includes milliseconds, which is the format the LiveCoinWatch uses for the date inputs.

Next is the ability to generate an offset from the current standard timestamp and another block for generating an offset from the new millisecond timestamp. This allows you to quickly compute the timestamp of hours, days, months, or even years from the current timestamp. Lastly, is a block to convert the new millisecond timestamp into a human readable date.

There is more information at the end of this article on how to use offsets.

# A Completely New Plugin

This new plugin adds two new blocks to the IDE and really ties together all the updates above to accomplish one of it’s use cases. The GraphLinq.Charting plugin allows you to generate an image of a chart from a dataset. The most common of these would be a time series where the x axis represents a date over time and the y axis represents some data that you want to graph.

The examples below use many of the new blocks that were added such as, LiveCoinWatch Fetch Single Coin History, Get Millisecond Timestamp, Get Millisecond Timestamp Offset, and Send A Photo with Caption. This graph will be added to the [GraphLinq Marketplace](https://marketplace.graphlinq.io/) and the bot in the [Official Telegram Group](https://t.me/graphlinq) will support the `/chart` command to generate a token price chart of the GLQ token.

![][image_ref_MCpaNlQzRmJjekxRQVE4ZjVWLnBuZw==]

![][image_ref_MCpaV0hBY2o1MExJOFkzRWpLLmpwZWc=]

![][image_ref_MCpYbHR0eFFSek1NUWQzVU1rLnBuZw==]

![][image_ref_MCppOWNQbFJhcGJrX1B6el9WLmpwZWc=]

# Timestamp Offsets Explained

Offsets work just like a regular timestamp block, but have an input string for the offset you want to calculate. Values are expressed as a number (the duration) and a single letter (the period of time). Valid periods are: h, d, m, y:
h = hours
d = days
m = months
y = years

![][image_ref_MCpqVjgxNmhta043U1duTnFRLnBuZw==]

In the graph above you can see a seven day offset indicated with the string `7d`. Here are some examples for other offsets.

![][image_ref_MCpMa2c3bTJfVGhDNjdLSGtxLnBuZw==]

Join Our Telegram: [https://t.me/graphlinq](https://t.me/graphlinq)

Follow Us on Twitter: [https://twitter.com/graphlinq_proto](https://twitter.com/graphlinq_proto)


[image_ref_MCp6eFRtX3FzZTMxdWw4QWRJLnBuZw==]: data:image/png;base64,
[image_ref_MCpaNlQzRmJjekxRQVE4ZjVWLnBuZw==]: data:image/png;base64,
[image_ref_MCpaV0hBY2o1MExJOFkzRWpLLmpwZWc=]: data:image/jpeg;base64,
[image_ref_MCpYbHR0eFFSek1NUWQzVU1rLnBuZw==]: data:image/png;base64,
[image_ref_MCppOWNQbFJhcGJrX1B6el9WLmpwZWc=]: data:image/jpeg;base64,
[image_ref_MCpqVjgxNmhta043U1duTnFRLnBuZw==]: data:image/png;base64,
[image_ref_MCpMa2c3bTJfVGhDNjdLSGtxLnBuZw==]: data:image/png;base64,
