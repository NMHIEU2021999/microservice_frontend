(function () {
  "use strict";

  var express = require("express"),
    request = require("request"),
    endpoints = require("../endpoints"),
    helpers = require("../../helpers"),
    app = express();

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

  app.post("/catalogue*", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.post(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });

  app.put("/catalogue*", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.put(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });

  app.delete("/catalogue*", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.delete(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });
  
  app.use("/tags-all-detail", function (req, res, next) {
    var url = endpoints.catalogueUrl + "/tags-all-detail";
    request
      .get(url)
      .on("error", function (e) {
        next(e);
      })
      .pipe(res);
  });

  app.get("/tags", function (req, res, next) {
    helpers.simpleHttpRequest(endpoints.tagsUrl, res, next);
  });

  app.post("/tags*", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.post(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });

  app.put("/tags*", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.put(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });

  app.delete("/tags*", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.delete(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });

  app.post("/tag-catalogue", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.post(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });

  app.delete("/tag-catalogue", function (req, res, next) {
    var url = endpoints.catalogueUrl + req.url.toString();
    request.delete(url).json(req.body).on("error", function (e) {s
      next(e);
    })
    .pipe(res);
  });

  app.post("/try-on", function (req, res, next) {
    var url = endpoints.tryOnUrl + '/api'
    request.post(url).json(req.body).on("error", function (e) {
      next(e);
    })
    .pipe(res);
  });

  module.exports = app;
})();
