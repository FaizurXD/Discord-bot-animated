# Discord Profile Picture and Banner Setter

This script sets the profile picture (avatar) and banner for a Discord user using the discord.js library.

## Prerequisites

Before running the script, make sure you have the following:

- Node.js installed on your machine.
- A Discord bot token.
- Profile picture (avatar) and banner images in GIF format located in a folder named "anim" in the same directory as the script.

## Setup

1. Clone this repository:git clone https://github.com/your_username/your_repository.git2. Navigate to the project directory:cd discord-profile-banner-setter3. Install dependencies:npm install4. Rename `.env.example` to `.env`.

5. Edit the `.env` file and add your Discord bot token, profile picture filename, and banner filename:BOT_TOKEN=your_discord_token_here PFP=profile_picture_filename.gif BANNER=banner_filename.gif6. Place your profile picture (avatar) and banner images in GIF format in a folder named "anim" in the root directory.

## Usage

Run the script using the following command:node setBannerAndAvatar.jsThe script will read the profile picture and banner filenames from the `.env` file, locate the corresponding images in the "anim" folder, and set them as the user's avatar and banner on Discord.

## Troubleshooting

- If the script fails to run or encounters errors, ensure that the Discord bot token and image filenames are correctly specified in the `.env` file and that the images are located in the "anim" folder.

- You can also customize the filenames for the profile picture and banner in the `.env` file to set different images.
