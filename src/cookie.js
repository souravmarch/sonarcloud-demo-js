const http = require("http");

function setCookieInsecurely(res) {
  // ❌ Insecure cookie (no HttpOnly, Secure flags)
  res.setHeader("Set-Cookie", "user=admin");
}

module.exports = { setCookieInsecurely };
