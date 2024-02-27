const express = require("express");
const app = express();
const config = require("./config/config");
const morgan = require("morgan");
const cors = require("cors");
const webpush = require('web-push');
require('./dbConnectivity/dbConnection')
require('./controllers/cityCron');
require('./controllers/bookingBlockCronjob');
require('./controllers/notificationCron');
const moment =require('moment');
app.use(
  cors({
    allowedHeaders: ["Content-Type", "token", "authorization"],
    exposedHeaders: ["token", "authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ extended: true, limit: "1000mb" }));
app.use('/api/v1', require('./routers/indexRouter'))
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
app.use(cors());
const http = require("http");
const server = require("http").createServer(app);

const swaggerDefinition = {
  info: {
    title: "TEXELY_API_DOCS",
    version: "1.0.0",
    description: "Swagger API Docs",
  },
  host: `${global.gConfig.swaggerURL}`,
  basePath: "/",
};
const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["./routers/*/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(morgan("dev"));
server.listen(global.gConfig.node_port, () => {
  console.log("server is running on port :", global.gConfig.node_port);
});





