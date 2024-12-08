function generateWindowDimensions() {
  // Common screen resolutions and their relative weights
  const commonResolutions = [
    { w: 1920, h: 1080, weight: 30 }, // Full HD
    { w: 1366, h: 768, weight: 20 },  // Laptop common
    { w: 1536, h: 864, weight: 15 },  // Laptop HD+
    { w: 1440, h: 900, weight: 15 },  // MacBook common
    { w: 1280, h: 720, weight: 10 },  // HD
    { w: 2560, h: 1440, weight: 10 }  // 2K
  ];

  // Randomly select a base resolution based on weights
  let random = Math.random() * 100;
  let selectedRes;
  
  for (const res of commonResolutions) {
    if (random <= res.weight) {
      selectedRes = res;
      break;
    }
    random -= res.weight;
  }
  
  // Add small random variations to make it look more natural
  const width = selectedRes.w + Math.floor(Math.random() * 40) - 20;
  const height = selectedRes.h + Math.floor(Math.random() * 30) - 15;
  
  // Available height is typically slightly less than total height due to browser chrome
  const availHeight = height - Math.floor(Math.random() * 50 + 30);

  // logic above from claude sonnet

  const payload = {
    "w": width,
    "h": height,
    "aw": width,
    "ah": availHeight,
    "c": Math.floor(Math.random() * 20 + 20)
  };

  return btoa(JSON.stringify(payload));
}

var lgndim = generateWindowDimensions();

console.log({
  lgndim
})