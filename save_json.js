const fs = require("fs");
const path = require("path");

const save = (usStates) => {
  fs.writeFile(
    path.join(__dirname, ".", "usStates.json"),
    // "./usStates.json",
    JSON.stringify(usStates, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};

// const logger = (req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   if (Object.keys(req.body).length) {
//     console.log(req.body);
//   }
//   next();
// };
// const save = skiTerms => {
//   fs.writeFile(
//     path.join(__dirname, "..", "data", "skiTerms.json"),
//     JSON.stringify(skiTerms, null, 2),
//     error => {
//       if (error) {
//         throw error;
//       }
//     }
//   );
// };

module.exports = { save };
