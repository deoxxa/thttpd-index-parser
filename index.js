exports.parse = function parse(data) {
  return data.split(/\n+/).filter(function(e) {
    return e.match(/^<a href/);
  }).map(function(e) {
    var matches = e.trim().match(/<a href="(.+?)">(.+?)<\/a>\s+(\d+-[A-Za-z]+-\d+\s+\d+:\d+)\s+(.+)$/);

    return {
      url: matches[1],
      modified: new Date(matches[3]),
      size: parseInt(matches[4], 10) || null,
    };
  });
}
