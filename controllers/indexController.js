exports.calculateTriangle = (req, res) => {
  try {
    const { alas_segitiga, tinggi_segitiga } = req.body;
    if (
      req.body.alas_segitiga < 0 ||
      req.body.tinggi_segitiga < 0
    ) {
      res.status(400).send({
        message: "Failed",
        data: {
          error: "Input must be number and positive",
        },
      });
    } else {
      const luas_segitiga = (alas_segitiga * tinggi_segitiga) / 2;
      res.status(200).send({
        message: "Success",
        data: {
          luas_segitiga,
        },
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
