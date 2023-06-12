import Joi from 'joi'; // for schema validation
import dotenv from 'dotenv'; // imports to keep all the credentials in .env file and load in run time.
dotenv.config() // to load .env to global process

const env_schema = Joi.object({
    PORT: Joi.number().default(8080) // will only throw error for required fields
    /* similar way all the variables can be validated before actual assignment so the application will not be build if any parameters in env or env is missing*/
}).unknown().required()

const { error, value: envVars} = env_schema.validate(process.env);

if (error) throw new Error(`config validation error: ${error.message}`);

const config = {
    port: envVars.PORT
}

export default config;