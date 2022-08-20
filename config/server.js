module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "Lrq7QR7kuGkmjWAkJKNS7g==",
      "VNGSuCeeB75fnJQvuylygw==",
      "HwnoLHUYWG/9tbhRDWQilA==",
      "eqV9Mo1ec0Vqj3b8vlV0qQ==",
    ]),
  },
});
