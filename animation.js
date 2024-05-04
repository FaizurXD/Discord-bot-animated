const { REST, Routes, DataResolver } = require("discord.js");

const fs = require("fs");

const path = require("path");

const dotenv = require("dotenv");

// Load variables from .env into process.env

dotenv.config();

async function setBannerAndAvatar() {

    try {

        // Check if the required keys exist and their values are not empty

        if (!process.env.BOT_TOKEN) {

            throw new Error('Token is missing or empty in .env');

        }

        const rest = new REST().setToken(process.env.BOT_TOKEN);

        const body = {};

        const pfpFilename = process.env.PFP;

        const bannerFilename = process.env.BANNER;

        // Check if the file names are provided

        if (!pfpFilename || !bannerFilename) {

            throw new Error('Profile picture filename or banner filename is missing in .env');

        }

        // Path to the "anim" folder

        const animFolderPath = path.join(__dirname, 'anim');

        // Resolve the paths for profile picture and banner

        const pfpPath = path.join(animFolderPath, pfpFilename);

        const bannerPath = path.join(animFolderPath, bannerFilename);

        // Check if profile picture and banner files exist

        if (!fs.existsSync(pfpPath)) {

            throw new Error(`Profile picture file "${pfpFilename}" not found in "anim" folder`);

        }

        if (!fs.existsSync(bannerPath)) {

            throw new Error(`Banner file "${bannerFilename}" not found in "anim" folder`);

        }

        body.avatar = await DataResolver.resolveImage(pfpPath);

        body.banner = await DataResolver.resolveImage(bannerPath);

        await rest.patch(Routes.user(), { body });

        console.log('Profile picture and banner set successfully 🎉');

    } catch (error) {

        console.error('Error setting profile picture and banner:', error);

    }

}

// Load variables from .env into process.env

dotenv.config();

// Execute the function to set banner and avatar

setBannerAndAvatar();