# slack-export-browser

## Overview

This is a very basic Next.js app to read a set of exported slack files and render a simple website to browse the content.

## Getting Started

1. After you have this project downloaded, get it ready by running 

	`npm install`

2. Next create a folder inside of the project folder called "slack-data." (You can call it something else, but if you do, edit .env.local to make sure it points to the correct subfolder.)
3. Unzip your exported slack file into that new folder. This should create a users.json, channels.json, and a bunch of subfolders for each channel.
4. Start the app by running

	`npm run dev`

## Static Export

You can produce a static export of the files by running

`npm run export`

The files will be in the ./out folder.

## Caveats

This project is quick and dirty, and isn't intended to be fully-functional. There's probably a lot it can't do. It meets my needs, for now, and I might update it over time if I find I need it to do something else, but otherwise - it is what it is. Your mileage may vary. 

## Credits

If it's not obvious, this app is largely based on the [nextjs-blog tutorial app](https://nextjs.org/learn/basics/create-nextjs-app) that creates a very simple blog from markdown files. When I was trying to decide how to build this app, I found that and discovered it was remarkably similar to what I wanted to do with the slack JSON files.