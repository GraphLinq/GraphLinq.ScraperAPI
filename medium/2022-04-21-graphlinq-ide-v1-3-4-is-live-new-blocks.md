---
url: https://medium.com/@graphlinq/graphlinq-ide-v1-3-4-is-live-new-blocks-98ca1a096ef7
canonical_url: https://medium.com/@graphlinq/graphlinq-ide-v1-3-4-is-live-new-blocks-98ca1a096ef7
title: GraphLinq IDE v1.3.4 Is Live! New Blocks
subtitle: The last two weeks have seen updates, fixes, and new features added to the
  GraphLinq IDE. This week we are releasing another update to the…
slug: graphlinq-ide-v1-3-4-is-live-new-blocks
description: ""
tags:
- graphlinq
- regex
- no-code
- glq
- blockchain
author: GraphLinq
username: graphlinq
---

# GraphLinq IDE v1.3.4 Is Live! New Blocks & Updates

![][image_ref_MSptMFpaTEZEVUF6LWZBVTFaZGVjejNRLnBuZw==]

The last two weeks have seen updates, fixes, and new features added to the GraphLinq IDE. This week we are releasing another update to the platform which includes six new blocks for a total of 286 blocks available in the GraphLinq IDE

# Twitter

In this latest release, we’ve added another output to the `On User Tweet` event block. This block is an event that is triggered whenever the user you are monitoring sends a new tweet to their followers. Prior to this release, the block only allowed you to grab the text of the tweet. We’ve added a new output called `link` which returns the direct link to the tweet.

![On User Tweet Event Block][image_ref_MCpFbGoxbmNHRUxncTRGSUswLnBuZw==]

# **Timestamp Offsets**

If you missed last week's article, or are unfamiliar with how Timestamp Offsets work, you can read more about the [GraphLinq IDE 1.3.3 Updates](https://graphlinq.medium.com/graphlinq-ide-1-3-3-updates-livecoinwatch-telegram-engine-8b7c6c627290) that were released last week. We’ve added the option for offsetting by weeks using the `w` character. You can now offset a timestamp by Hours, Days, Weeks, or Years.

# String Manipulation

The six new blocks that were added are for working with strings (or text). Let’s just dive in with some examples!

# String Split

Most of the time when working with data, it’s either in an array, JSON, or a comma-separated list. But what if you want to work with data that was separated by a character other than the comma? Now you can! In the example below, the string “Example|using|pipes|to|split” is separated using the pipe character. (It’s the one that’s above the enter button… yes, that’s called a pipe!)

![Use any character you want to split a string][image_ref_MCpDd25LZXduTWtjV2xBR09uLnBuZw==]

# **String Contains Multiple**

Similar to the existing block called `String Contains` which checks if a string of text contains another string, `String Contains Multiple` allows you to provide a comma-separated list of values, and if a match on any of them is found in the original string, the block returns true. Here are two examples:

![The word cow was found and the logic followed the True path of execution][image_ref_MCpQam9vcTkwS0ZfZ2xCUkNxLnBuZw==]

![The words pig, ant, cow, or bird were not found and the logic followed the False path of execution][image_ref_MCpMZ2ZNUUU2NTl5dkVpQmJPLnBuZw==]

# **Regular Expressions (RegEx)**

Before we move on to the final four new blocks that have been added we need to talk about regular expressions. For those who know, RegEx can be a powerful coding tool (when used correctly). If you don’t know what RegEx is we can let a xkcd cartoon explain.

![][image_ref_MCo5Qk92Y09kNHFpQUNQVEZNLnBuZw==]

In case that didn’t help, here is how Wikipedia defines RegEx:

> *A regular expressions is a sequence of characters that specifies a search pattern in text. Usually such patterns are used by string-searching algorithms for “find” or “find and replace” operations on strings, or for input validation.*

# String Replace Using RegEx

In the example below we will use RegEx to search the string and replace all matches. The original string we start with is:
*This is the best. Many can do it all.*

For our Regular Expression we are going to use **([A-Z])\w+** which means to search for any capital letter and match the rest of the word when it is found.

Finally, we are going to use the string **GraphLinq** for what we want to replace our matches with. Here is the result.

![The string is now: GraphLinq is the best. GraphLinq can do it all.][image_ref_MCprWmVsYjY5eDBnMi1WbTNYLnBuZw==]

The RegEx we provided matched the words *This* and *Many* in our original string and replaced them with the word *GraphLinq*.

# String Get Match Using RegEx

This block returns the first match that is found in the original string. Again we are looking for the same expression, that starts with a capital letter, and returns the rest of the word.

![Notice only GraphLinq was returned despite Rocks and House being capital][image_ref_MCppVTB0dC1ESXVEMG03aFhULnBuZw==]

# **String Matches RegEx (Conditional)**

Conditional blocks are ones that follow a true/false logic flow to continue their execution. Just as in previous examples, we are going to search for any capital letters.

![No capital letters were found so this returns False][image_ref_MCozd1NCVG1YU2ZORG5XTHd6LnBuZw==]

# String Get All Match Using RegEx

By now you might be thinking, what if I want to return all the matches my RegEx found? We’ve got that covered too.

![Returns all matches][image_ref_MCo0NkxBY0J1dmF2by01OE5mLnBuZw==]

There are plenty of tools online to learn more about RegEx and there are even websites that will help you build and test your RegEx right in the browser! Check out [regexr.com](https://regexr.com//) to learn more.


[image_ref_MSptMFpaTEZEVUF6LWZBVTFaZGVjejNRLnBuZw==]: data:image/png;base64,
[image_ref_MCpFbGoxbmNHRUxncTRGSUswLnBuZw==]: data:image/png;base64,
[image_ref_MCpDd25LZXduTWtjV2xBR09uLnBuZw==]: data:image/png;base64,
[image_ref_MCpQam9vcTkwS0ZfZ2xCUkNxLnBuZw==]: data:image/png;base64,
[image_ref_MCpMZ2ZNUUU2NTl5dkVpQmJPLnBuZw==]: data:image/png;base64,
[image_ref_MCo5Qk92Y09kNHFpQUNQVEZNLnBuZw==]: data:image/png;base64,
[image_ref_MCprWmVsYjY5eDBnMi1WbTNYLnBuZw==]: data:image/png;base64,
[image_ref_MCppVTB0dC1ESXVEMG03aFhULnBuZw==]: data:image/png;base64,
[image_ref_MCozd1NCVG1YU2ZORG5XTHd6LnBuZw==]: data:image/png;base64,
[image_ref_MCo0NkxBY0J1dmF2by01OE5mLnBuZw==]: data:image/png;base64,
