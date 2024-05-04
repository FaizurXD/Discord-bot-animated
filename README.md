# Discord Profile Picture and Banner Setter

This script sets the profile picture (avatar) and banner for a Discord bot using the discord.js library.

## Prerequisites

Before running the script, make sure you have the following:

- Node.js installed on your machine.
- A Discord bot token.
- Profile picture (avatar) and banner images in GIF format located in a folder named "anim" in the same directory as the script.

## Setup

1. Clone this repository:git clone https://github.com/FaizurXD/Discord-bot-animated

2. Rename `.env.example` to `.env`.

3. Edit the `.env` file and add your Discord bot token, profile picture filename, and banner variables:
`BOT_TOKEN=your_discord_token_here`  , `PFP=profile_picture_filename.gif` , 
`BANNER=banner_filename.gif`
6. Place your profile picture (avatar) and banner images in GIF format in a folder named "anim" in the root directory.

## Usage

Run the script using the following command:node setBannerAndAvatar.jsThe script will read the profile picture and banner filenames from the `.env`
file, locate the corresponding images in the "anim" folder, and set them as the user's avatar and banner on Discord.

## Troubleshooting

- If the script fails to run or encounters errors, ensure that the Discord bot token and image filenames are correctly specified in the `.env` file and that the Gif's are located in the "anim" folder.

- You can also customize the filenames for the profile picture and banner in the `.env` file to set different Gif's.
