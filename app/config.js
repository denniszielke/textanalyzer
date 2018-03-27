var config = {}

config.mongoHost = process.env.MONGO_ENDPOINT;
config.mongoAuthKey = process.env.MONGO_AUTHKEY;
config.instrumentationKey = process.env.INSTRUMENTATIONKEY;
config.textAnalyticsKey = process.env.TEXTAPI_KEY;
config.textAnalyticsUrl = process.env.TEXTAPI_URL;
config.databaseId = "tweets";
config.collectionId = "social";

module.exports = config;
