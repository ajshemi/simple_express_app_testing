const { Router } = require("express");
const { save } = require("./save_json");

let usStates = require("./usStates.json");

const router = new Router();

router.get("/", (req, res) => {
  res.json(usStates);
});

router.get("/:name", (req, res) => {
  const findState = usStates.find((state) => state.state === req.params.name);
  if (!findState) {
    res.status(404).send("state with name was not found");
  } else {
    res.json(findState);
  }
});

router.post("/", (req, res) => {
  usStates.push(req.body);
  save(usStates);
  res.json({
    status: "success",
    stateInfo: req.body,
  });
});

router.put("/:name", (req, res) => {
  //   const foundState = usStates.find((state) => state.state === req.params.name);
  //   if (!foundState) {
  //     res.status(404).send(" state with that name was not found");
  //   } else {
  usStates = usStates.map((state) => {
    if (state.state === req.params.name) {
      return req.body;
    } else {
      return state;
    }
  });
  save(usStates);

  res.json({
    status: "success",
    stateInfo: req.body,
  });
});

router.delete("/:name", (req, res) => {
  usStates = usStates.filter((state) => state.state !== req.params.name);
  save(usStates);
  res.json({
    status: "success",
    removed: req.params.name,
    newLength: usStates.length,
  });
});

module.exports = router;
