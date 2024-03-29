module.exports = {
    SITE_URL: process.env.SITE_URL,
    WEBGIS_PORT: process.env.WEBGIS_PORT||3000,
    MONGO_IP: process.env.MONGO_IP || "mongo-simile",
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    REDIS_URL: process.env.REDIS_URL || "redis-simile",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    SESSION_SECRET: process.env.SESSION_SECRET,
}