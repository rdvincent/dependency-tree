var data = [
  {"name":"x.Banana", "imports":["x.Apple"], "colors":["red"]},
  {"name":"x.Cherry", "imports":["x.Apple", "x.Banana"], "colors": ["blue", "blue"]},
  {"name":"x.Apple", "imports":["x.Banana", "x.Cherry"], "colors": ["red", "yellow"]},
  {"name":"y.D", "imports":["x.Banana"], "colors":["orange"]},
  {"name":"y.E", "imports":["y.D"], "colors":["gray"]},
  {"name":"y.F", "imports":["x.Apple"], "colors":["cyan"]},
  {"name":"y.G", "imports":["x.Apple"], "colors":["pink"]},
  {"name":"y.H", "imports":["x.Apple"], "colors":["purple"]},
  {"name":"y.I", "imports":["x.Apple"], "colors":["pink"]},
  {"name":"y.J", "imports":["x.Apple"], "colors":["purple"]},
];
