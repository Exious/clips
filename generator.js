const fs = require("fs");

const options = {
  price: {
    min: 4499,
    max: 109342,
  },
  videoMemory: {
    min: 1,
    max: 12,
  },
  architect: {
    values: ["AMD", "Nvidia"],
  },
  rayTracingSupport: {
    values: [0, 1],
  },
  memoryBusBandwidth: {
    min: 1,
    max: 12,
  },
  memoryClockFrequency: {
    min: 500,
    max: 2000,
  },
  clockFrequency: {
    min: 500,
    max: 5000,
  },
};

const getRandomArbitrary = ([min, max]) => Math.round(Math.random() * (max - min) + min);

const generate = () => {
  const architectValuesLength = Object.values(options.architect.values).length;
  const rayTracingSupportValuesLength = Object.values(options.rayTracingSupport.values).length;
  const architectIndex = getRandomArbitrary([0, architectValuesLength - 1]);
  const rayTracingSupportIndex = getRandomArbitrary([0, rayTracingSupportValuesLength - 1]);

  const price = getRandomArbitrary(Object.values(options.price));
  const videoMemory = getRandomArbitrary(Object.values(options.videoMemory)) * 2;
  const architect = options.architect.values[architectIndex];
  const rayTracingSupport = options.rayTracingSupport.values[rayTracingSupportIndex];
  const memoryBusBandwidth = getRandomArbitrary(Object.values(options.memoryBusBandwidth)) * 32;
  const memoryClockFrequency = getRandomArbitrary(Object.values(options.memoryClockFrequency));
  const clockFrequency = getRandomArbitrary(Object.values(options.clockFrequency));

  return `(GPU\n\t(price ${price})\n\t(videoMemory ${videoMemory})\n\t(architect "${architect}")\n\t(rayTracingSupport ${rayTracingSupport})\n\t(memoryBusBandwidth ${memoryBusBandwidth})\n\t(memoryClockFrequency ${memoryClockFrequency})\n\t(clockFrequency ${clockFrequency})\n)\n`;
};

const genericLoop = (quantity) => {
  return [...new Array(quantity)].map((e) => generate());
};

const content = genericLoop(100000).join("");

fs.writeFileSync("lab2.facts.dat", content);
