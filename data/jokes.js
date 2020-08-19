const jokes = [
  {
    joke: "What did the shy pebble wish for? That she was a little boulder.",
    funny: true,
  },
  {
    joke: "I'll call you later. Dont call me later, call me Dad.",
    funny: false,
  },
  {
    joke: "'Hey, dad, did you get a haircut?' 'No, I got them all cut.'",
    funny: true,
  },
  {
    joke: "What kind of music do planets listen to? Nep-tunes.",
    funny: true,
  },
];
module.exports = {
  getAll: function () {
    return jokes;
  },
};
