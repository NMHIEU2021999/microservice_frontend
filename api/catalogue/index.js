(function () {
  "use strict";

  var express = require("express"),
    request = require("request"),
    endpoints = require("../endpoints"),
    helpers = require("../../helpers"),
    app = express();

  var proxy = require("http-proxy").createProxyServer({
    host: endpoints.catalogueUrl,
    // port: 80
  });

  app.get("/catalogue/images*", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request
      .get(url)
      .on("error", function (e) {
        next(e);
      })
      .pipe(res);
  });

  app.get("/catalogue*", function (req, res, next) {
    helpers.simpleHttpRequest(
      endpoints.catalogueUrl + req.url.toString(),
      res,
      next
    );
  });

  app.use("/catalogue*", function (req, res, next) {
    proxy.web(
      req,
      res,
      {
        target: endpoints.catalogueUrl + req.url.toString(),
      },
      next
    );
  });

  
  app.use("/tags-all-detail", function (req, res, next) {
    proxy.web(
      req,
      res,
      {
        target: endpoints.catalogueUrl + req.url.toString(),
      },
      next
    );
  });

  app.use("/tags*", function (req, res, next) {
    proxy.web(
      req,
      res,
      {
        target: endpoints.catalogueUrl + req.url.toString(),
      },
      next
    );
  });

  app.get("/tags", function (req, res, next) {
    helpers.simpleHttpRequest(endpoints.tagsUrl, res, next);
  });

  module.exports = app;
})();
