class TestGetController {
  static handle(req, res) {
    return res.status(200).send("Deu bom");
  }
}
module.exports = TestGetController;
