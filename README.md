thttpd-index-parser
===================

Parse thttpd index pages

Overview
--------

There's really not much to say. thttpd provides a stable, if ugly, autoindex
page. I have reason to parse this page. The rest is history.

Installation
------------

> $ npm install thttpd-index-parser

OR

> $ git clone git://github.com/deoxxa/thttpd-index-parser.git node_modules/thttpd-index-parser

Usage
-----

This is about it. There's not much to know.

```javascript
#!/usr/bin/env node

var parser = require("thttpd-index-parser"),
    request = require("request");

request("http://somewhere/with/a/list", function(err, res, data) {
  console.log(parser.parse(data.toString()));
});
```

parser.parse returns an array of objects, one for each entry in the list. The
structure of those objects is as follows.

A file:

```javascript
{
  "url": "http://a.fully.qualified.domain/and/the/whole/path",
  "time": new Date("Sun Sep 16 2012 00:33:35 GMT+1000 (EST)"),
  "size": 12345,
}
```

A directory:

```javascript
{
  "url": "http://same.as.above/but/the/path/ends/in/a/slash/",
  "time": new Date("Sun Sep 16 2012 00:33:35 GMT+1000 (EST)"),
  "size": null,
}
```

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* ADN ([@deoxxa](https://alpha.app.net/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
