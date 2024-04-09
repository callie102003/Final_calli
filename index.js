const zodiacSigns = [
  {
    sign: "Rat",
    description: "Years: 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008\n\nPeople born in the Year of the Rat are intelligent, adaptable, and charming.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/023/436/236/small/chinese-astrology-rat-symbol-in-red-and-white-color-vector.jpg",
  },
  {
    sign: "Ox",
    description: "Years: 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009\n\nPeople born in the Year of the Ox are diligent, reliable, and honest.",
    image: "https://www.thechinesequest.com/wp-content/uploads/2014/07/Chinese-Zodiac-Ox-Year-of-the-Ox.jpg",
  },
  {
    sign: "Tiger",
    description: "Years: 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010\n\nPeople born in the Year of the Tiger are brave, competitive, and confident.",
    image: "https://images.rawpixel.com/image_200/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjExMTItMDA3LmpwZw.jpg",
  },
  {
    sign: "Rabbit",
    description: "Years: 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011\n\nPeople born in the Year of the Rabbit are gentle, kind, and elegant.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/024/096/332/small/chinese-zodiac-rabbit-animal-free-png.png",
  },
  {
    sign: "Dragon",
    description: "Years: 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012\n\nPeople born in the Year of the Dragon are strong, enthusiastic, and confident.",
    image: "https://www.astrolis.com/images/sign/dragonfb.png",
  },
  {
    sign: "Snake",
    description: "Years: 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013\n\nPeople born in the Year of the Snake are intelligent, intuitive, and wise.",
    image: "https://www.fengshuimall.com/image/2023/feng-shui-forecast-2023-snake.jpg",
  },
  {
    sign: "Horse",
    description: "Years: 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014\n\nPeople born in the Year of the Horse are energetic, independent, and adventurous.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/016/927/852/small/horse-chinese-zodiac-emblem-free-vector.jpg",
  },
  {
    sign: "Goat",
    description: "Years: 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015\n\nPeople born in the Year of the Goat are gentle, creative, and compassionate.",
    image: "https://www.fengshuied.com/wp-content/uploads/2018/11/goat-zodiac.jpg",
  },
  {
    sign: "Monkey",
    description: "Years: 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016\n\nPeople born in the Year of the Monkey are witty, intelligent, and versatile.",
    image: "https://www.astrolis.com/images/sign/monkeyfb.png",
  },
  {
    sign: "Rooster",
    description: "Years: 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017\n\nPeople born in the Year of the Rooster are honest, confident, and resourceful.",
    image: "https://www.astrology.com/img/signs/thumbnail/rooster.png",
  },
  {
    sign: "Dog",
    description: "Years: 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018\n\nPeople born in the Year of the Dog are loyal, honest, and protective.",
    image: "https://www.astrolis.com/images/sign/dogfb.png",
  },
  {
    sign: "Pig",
    description: "Years: 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019\n\nPeople born in the Year of the Pig are kind, easygoing, and generous.",
    image: "https://images.rawpixel.com/image_png_200/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyNy1udW5ueS0xMi1rejdobW1pcS5wbmc.png",
  },
];

document.getElementById("btnSubmit").addEventListener("click", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;

  if (name === "" || year === "") {
    alert("Fields should not be empty. Please provide proper input.");
  } else {
    const zodiacIndex = (year - 1924) % 12;
    document.getElementById("img").src = zodiacSigns[zodiacIndex].image;
    document.getElementById("cz-title").textContent = zodiacSigns[zodiacIndex].sign;
    document.getElementById("cz-description").textContent = zodiacSigns[zodiacIndex].description;
  }
});
