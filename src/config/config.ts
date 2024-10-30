import dotenv from 'dotenv';
import path from 'path';
import { env } from 'process';

dotenv.config();

export default { 
    
    port: process.env.PORT,


    cloudinary: {
        name: process.env.CLOUND_NAME,
        key: process.env.API_KEY,
        secret: process.env.API_SECRET
    }


}