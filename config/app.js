module.exports = {
  serverPort: process.env.SERVER_PORT || 8000,
  prefixApiVersion: process.env.PREFIX_API_VERSION || "/api/v3",
  static: {
    urlPath: "/assets",
    folderPath: `${__dirname}/../src/public`,
  },
  cors: {
    origin: true,
    credentials: true,
  },
  jwtAccessKey: process.env.JWT_ACCESS_KEY || "vietpro_access_key",
  jwtRefreshKey: process.env.JWT_REFRESH_KEY || "vietpro_refresh_key",
};
