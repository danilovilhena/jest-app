const calculateSum = (req, res) => {
  const { numbers } = req.body;
  if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  res.json({ sum });
};

const calculateAverage = (req, res) => {
  const { numbers } = req.body;
  if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  res.json({ average });
};

const countNumbers = (req, res) => {
  const { numbers } = req.body;
  if (!numbers || !Array.isArray(numbers)) {
    return res.status(400).json({ message: "Invalid numbers provided" });
  }

  const count = numbers.length;
  res.json({ count });
};

module.exports = {
  calculateSum,
  calculateAverage,
  countNumbers,
};
