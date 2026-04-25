const logger = (req, res, next) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Time:", new Date().toLocaleDateString());

  next(); // move to next
};

module.exports = logger;