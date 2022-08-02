const PROXY_CONFIG = [
  {
    context: [
      "/api", //   /weatherforecast
    ],
    target: "https://localhost:40443",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
