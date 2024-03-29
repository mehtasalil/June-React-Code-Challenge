export var getColorFromString = function (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var j = 0; j < 3; j++) {
    var value = (hash >> (j * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};
