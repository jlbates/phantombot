# VJ for your Twitch.tv Phantombot
This is a vj script for Phantombot, meant to be used in conjunction with TribeXr VR DJ Software.

This is a super simple project currently. You will need to manually edit the script to change the list of available gif options the vj will choose from.


## Setup
* Follow this guide and get Phantombot up and running on your twitch channel.
https://community.phantombot.tv/t/windows-setup-guide/60

* To change what gifs the vj will play, you can open up the vjgiphy.js file in a text editor and edit the gifs array.

* Copy / Pasta vjgiphy.js into your Phantombot/scripts/commands/ directory. That's it. Now when you start phantombot, you will have access to the `vjon` and `vjoff` commands.



## The script supports two commands.

```
!vjon

```
Turns the VJ on with a default interval of one minute. (60000 milliseconds)

```
!vjon *timeInMilliseconds*

```

Pass a custom interval with the vjon command.

```
!vjoff
```

Turns the VJ off.
