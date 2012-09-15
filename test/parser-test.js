var assert = require("assert"),
    fs = require("fs"),
    parser = require("../index"),
    path = require("path"),
    vows = require("vows");

vows.describe("parser").addBatch(fs.readdirSync(__dirname + "/data").filter(function(e) {
  return e.match(/html$/);
}).map(function(e) {
  e = path.basename(e, ".html");

  var html = fs.readFileSync(path.join(__dirname, "data", e + ".html")).toString().trim(),
      json = fs.readFileSync(path.join(__dirname, "data", e + ".json")).toString().trim();

  return {
    name: e,
    test: {
      topic: function() { return parser.parse(html); },
      "results in the correct output": function(result) {
        assert.equal(JSON.stringify(result, null, 2), json);
      },
    },
  };
}).reduce(function(i, v) {
  i[v.name] = v.test;
  return i;
}, {})).export(module);
