const PRESIDENTS = [
  { id: "01", name: "George Washington", number: "1st president", wiki: "https://en.wikipedia.org/wiki/George_Washington" },
  { id: "02", name: "John Adams", number: "2nd president", wiki: "https://en.wikipedia.org/wiki/John_Adams" },
  { id: "03", name: "Thomas Jefferson", number: "3rd president", wiki: "https://en.wikipedia.org/wiki/Thomas_Jefferson" },
  { id: "04", name: "James Madison", number: "4th president", wiki: "https://en.wikipedia.org/wiki/James_Madison" },
  { id: "05", name: "James Monroe", number: "5th president", wiki: "https://en.wikipedia.org/wiki/James_Monroe" },
  { id: "06", name: "John Quincy Adams", number: "6th president", wiki: "https://en.wikipedia.org/wiki/John_Quincy_Adams" },
  { id: "07", name: "Andrew Jackson", number: "7th president", wiki: "https://en.wikipedia.org/wiki/Andrew_Jackson" },
  { id: "08", name: "Martin Van Buren", number: "8th president", wiki: "https://en.wikipedia.org/wiki/Martin_Van_Buren" },
  { id: "09", name: "William Henry Harrison", number: "9th president", wiki: "https://en.wikipedia.org/wiki/William_Henry_Harrison" },
  { id: "10", name: "John Tyler", number: "10th president", wiki: "https://en.wikipedia.org/wiki/John_Tyler" },
  { id: "11", name: "James K. Polk", number: "11th president", wiki: "https://en.wikipedia.org/wiki/James_K._Polk" },
  { id: "12", name: "Zachary Taylor", number: "12th president", wiki: "https://en.wikipedia.org/wiki/Zachary_Taylor" },
  { id: "13", name: "Millard Fillmore", number: "13th president", wiki: "https://en.wikipedia.org/wiki/Millard_Fillmore" },
  { id: "14", name: "Franklin Pierce", number: "14th president", wiki: "https://en.wikipedia.org/wiki/Franklin_Pierce" },
  { id: "15", name: "James Buchanan", number: "15th president", wiki: "https://en.wikipedia.org/wiki/James_Buchanan" },
  { id: "16", name: "Abraham Lincoln", number: "16th president", wiki: "https://en.wikipedia.org/wiki/Abraham_Lincoln" },
  { id: "17", name: "Andrew Johnson", number: "17th president", wiki: "https://en.wikipedia.org/wiki/Andrew_Johnson" },
  { id: "18", name: "Ulysses S. Grant", number: "18th president", wiki: "https://en.wikipedia.org/wiki/Ulysses_S._Grant" },
  { id: "19", name: "Rutherford B. Hayes", number: "19th president", wiki: "https://en.wikipedia.org/wiki/Rutherford_B._Hayes" },
  { id: "20", name: "James A. Garfield", number: "20th president", wiki: "https://en.wikipedia.org/wiki/James_A._Garfield" },
  { id: "21", name: "Chester A. Arthur", number: "21st president", wiki: "https://en.wikipedia.org/wiki/Chester_A._Arthur" },
  { id: "22", name: "Grover Cleveland", number: "22nd and 24th president", wiki: "https://en.wikipedia.org/wiki/Grover_Cleveland" },
  { id: "23", name: "Benjamin Harrison", number: "23rd president", wiki: "https://en.wikipedia.org/wiki/Benjamin_Harrison" },
  { id: "24", name: "William McKinley", number: "25th president", wiki: "https://en.wikipedia.org/wiki/William_McKinley" },
  { id: "25", name: "Theodore Roosevelt", number: "26th president", wiki: "https://en.wikipedia.org/wiki/Theodore_Roosevelt" },
  { id: "26", name: "William Howard Taft", number: "27th president", wiki: "https://en.wikipedia.org/wiki/William_Howard_Taft" },
  { id: "27", name: "Woodrow Wilson", number: "28th president", wiki: "https://en.wikipedia.org/wiki/Woodrow_Wilson" },
  { id: "28", name: "Warren G. Harding", number: "29th president", wiki: "https://en.wikipedia.org/wiki/Warren_G._Harding" },
  { id: "29", name: "Calvin Coolidge", number: "30th president", wiki: "https://en.wikipedia.org/wiki/Calvin_Coolidge" },
  { id: "30", name: "Herbert Hoover", number: "31st president", wiki: "https://en.wikipedia.org/wiki/Herbert_Hoover" },
  { id: "31", name: "Franklin D. Roosevelt", number: "32nd president", wiki: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt" },
  { id: "32", name: "Harry S. Truman", number: "33rd president", wiki: "https://en.wikipedia.org/wiki/Harry_S._Truman" },
  { id: "33", name: "Dwight D. Eisenhower", number: "34th president", wiki: "https://en.wikipedia.org/wiki/Dwight_D._Eisenhower" },
  { id: "34", name: "John F. Kennedy", number: "35th president", wiki: "https://en.wikipedia.org/wiki/John_F._Kennedy" },
  { id: "35", name: "Lyndon B. Johnson", number: "36th president", wiki: "https://en.wikipedia.org/wiki/Lyndon_B._Johnson" },
  { id: "36", name: "Richard Nixon", number: "37th president", wiki: "https://en.wikipedia.org/wiki/Richard_Nixon" },
  { id: "37", name: "Gerald Ford", number: "38th president", wiki: "https://en.wikipedia.org/wiki/Gerald_Ford" },
  { id: "38", name: "Jimmy Carter", number: "39th president", wiki: "https://en.wikipedia.org/wiki/Jimmy_Carter" },
  { id: "39", name: "Ronald Reagan", number: "40th president", wiki: "https://en.wikipedia.org/wiki/Ronald_Reagan" },
  { id: "40", name: "George H. W. Bush", number: "41st president", wiki: "https://en.wikipedia.org/wiki/George_H._W._Bush" },
  { id: "41", name: "Bill Clinton", number: "42nd president", wiki: "https://en.wikipedia.org/wiki/Bill_Clinton" },
  { id: "42", name: "George W. Bush", number: "43rd president", wiki: "https://en.wikipedia.org/wiki/George_W._Bush" },
  { id: "43", name: "Barack Obama", number: "44th president", wiki: "https://en.wikipedia.org/wiki/Barack_Obama" },
  { id: "45", name: "Donald Trump", number: "45th and 47th president", wiki: "https://en.wikipedia.org/wiki/Donald_Trump" },
  { id: "44", name: "Joe Biden", number: "46th president", wiki: "https://en.wikipedia.org/wiki/Joe_Biden" },
];

const WASHINGTON_COLORS = {
  face: "#c98667",
  hair: "#ece0cf",
  clothes: "#273146",
  shirt: "#eee8df",
  background: "#e8dcc8",
};

const tabButtons = Array.from(document.querySelectorAll("[data-tab]"));
const pages = Array.from(document.querySelectorAll(".page"));
const presidentCards = Array.from(document.querySelectorAll(".president-card"));
const selectedPresident = document.querySelector(".selected-president");
const drawingStatus = document.querySelector(".drawing-status");
const drawCanvas = document.querySelector("#draw-canvas");
const homeCanvas = document.querySelector("#home-canvas");
const luckyButton = document.querySelector("#lucky-button");
const luckyName = luckyButton?.querySelector(".lucky-name");
const luckyNumber = luckyButton?.querySelector(".lucky-number");
const colorPicker = document.querySelector("#color-picker");
const saturationPicker = document.querySelector("#saturation-picker");
const brightnessPicker = document.querySelector("#brightness-picker");
const brushSizeInput = document.querySelector("#brush-size");
const colorPreview = document.querySelector("#color-preview");
const colorValue = document.querySelector("#color-value");
const clearColorsButton = document.querySelector("#clear-colors");
const resetOutlineButton = document.querySelector("#reset-outline");
const swatches = Array.from(document.querySelectorAll(".swatch"));
const presidentsByLabel = new Map(PRESIDENTS.map((president) => [`${president.name} - ${president.number}`, president]));

let strokeLibrary = {};
let coloringPage;
let homeColoring;
let luckyTimer;
let pendingPresident = PRESIDENTS[0];
let currentColor = "#111111";
let currentHue = 0;
let currentSaturation = 0;
let currentLightness = 7;

function tabFromHash() {
  const tabName = window.location.hash.replace("#", "");
  return tabName === "sketch" ? "draw" : tabName;
}

function activateTab(tabName) {
  for (const button of tabButtons) {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  }

  for (const page of pages) {
    page.classList.toggle("is-active", page.id === tabName);
  }

  if (window.location.hash !== `#${tabName}`) {
    window.history.replaceState(null, "", `#${tabName}`);
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

function setupCards() {
  for (const card of presidentCards) {
    const president = presidentsByLabel.get(card.dataset.president);
    if (!president) {
      continue;
    }

    card.dataset.id = president.id;
    card.addEventListener("click", () => selectPresident(president, true));
  }
}

function selectPresident(president, shouldOpenTab) {
  for (const item of presidentCards) {
    const isSelected = item.dataset.id === president.id;
    item.classList.toggle("is-selected", isSelected);
    item.setAttribute("aria-pressed", String(isSelected));
  }

  if (selectedPresident) {
    selectedPresident.textContent = `${president.name} - ${president.number}`;
  }

  if (shouldOpenTab) {
    activateTab("draw");
  }

  showColoringPage(president);
}

function setDrawStatus(text) {
  if (drawingStatus) {
    drawingStatus.textContent = text;
  }
}

function showColoringPage(president) {
  const strokes = strokeLibrary[president.id];
  if (!coloringPage || !strokes) {
    pendingPresident = president;
    setDrawStatus("Loading coloring page");
    return;
  }

  pendingPresident = undefined;
  coloringPage.setPresident(president, strokes);
  setDrawStatus("Color with the selected brush");
}

class ColoringPage {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas?.getContext("2d");
    this.paintCanvas = document.createElement("canvas");
    this.paintCtx = this.paintCanvas.getContext("2d");
    this.strokes = [];
    this.president = PRESIDENTS[0];
    this.isPainting = false;
    this.lastPoint = null;
    this.bind();
    this.resizePaintLayer();
  }

  bind() {
    if (!this.canvas) {
      return;
    }

    this.canvas.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      this.isPainting = true;
      this.lastPoint = this.pointFromEvent(event);
      this.paintAt(this.lastPoint, this.lastPoint);
      this.canvas.setPointerCapture(event.pointerId);
    });

    this.canvas.addEventListener("pointermove", (event) => {
      if (!this.isPainting) {
        return;
      }
      const nextPoint = this.pointFromEvent(event);
      this.paintAt(this.lastPoint, nextPoint);
      this.lastPoint = nextPoint;
    });

    for (const eventName of ["pointerup", "pointercancel", "pointerleave"]) {
      this.canvas.addEventListener(eventName, () => {
        this.isPainting = false;
        this.lastPoint = null;
      });
    }
  }

  resizePaintLayer() {
    if (!this.canvas) {
      return;
    }
    this.paintCanvas.width = this.canvas.width;
    this.paintCanvas.height = this.canvas.height;
  }

  setPresident(president, strokes) {
    this.president = president;
    this.strokes = prepareStrokes(strokes);
    this.clearColors();
  }

  pointFromEvent(event) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * this.canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * this.canvas.height,
    };
  }

  paintAt(from, to) {
    if (!from || !to) {
      return;
    }

    this.paintCtx.save();
    this.paintCtx.strokeStyle = currentColor;
    this.paintCtx.fillStyle = currentColor;
    this.paintCtx.lineWidth = Number(brushSizeInput?.value || 26);
    this.paintCtx.lineCap = "round";
    this.paintCtx.lineJoin = "round";
    this.paintCtx.beginPath();
    this.paintCtx.moveTo(from.x, from.y);
    this.paintCtx.lineTo(to.x, to.y);
    this.paintCtx.stroke();
    this.paintCtx.beginPath();
    this.paintCtx.arc(to.x, to.y, this.paintCtx.lineWidth / 2, 0, Math.PI * 2);
    this.paintCtx.fill();
    this.paintCtx.restore();
    this.render();
  }

  clearColors() {
    if (!this.paintCtx || !this.canvas) {
      return;
    }
    this.paintCtx.clearRect(0, 0, this.paintCanvas.width, this.paintCanvas.height);
    this.render();
  }

  render() {
    if (!this.ctx || !this.canvas) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.paintCanvas, 0, 0);
    drawOutline(this.ctx, this.strokes, this.canvas, 1);
  }
}

class HomeColoringAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas?.getContext("2d");
    this.strokes = [];
    this.frame = 0;
    this.startedAt = 0;
    this.duration = 12500;
    this.tick = this.tick.bind(this);
  }

  start(strokes) {
    if (!this.ctx || !this.canvas) {
      return;
    }
    cancelAnimationFrame(this.frame);
    this.strokes = prepareStrokes(strokes);
    this.startedAt = performance.now();
    this.tick();
  }

  tick() {
    const elapsed = performance.now() - this.startedAt;
    const progress = Math.min(1, elapsed / this.duration);
    this.render(progress);

    if (progress >= 1) {
      setTimeout(() => {
        this.startedAt = performance.now();
        this.tick();
      }, 1100);
      return;
    }

    this.frame = requestAnimationFrame(this.tick);
  }

  render(progress) {
    const ctx = this.ctx;
    const canvas = this.canvas;
    if (!ctx || !canvas) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHomeFill(ctx, canvas, progress);
    drawOutline(ctx, this.strokes, canvas, 0.95);
  }
}

function drawHomeFill(ctx, canvas, progress) {
  const geom = portraitGeometry(canvas);
  const faceProgress = phaseProgress(progress, 0.00, 0.27);
  const hairProgress = phaseProgress(progress, 0.27, 0.50);
  const clothesProgress = phaseProgress(progress, 0.50, 0.76);
  const backgroundProgress = phaseProgress(progress, 0.76, 1.00);

  ctx.save();
  if (backgroundProgress > 0) {
    drawBrushFillRect(ctx, 0, 0, canvas.width, canvas.height, WASHINGTON_COLORS.background, backgroundProgress, 52);
  }
  ctx.globalCompositeOperation = "destination-over";
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  drawBrushFillEllipse(ctx, geom.cx, geom.cy - geom.scale * 0.05, geom.scale * 0.18, geom.scale * 0.25, WASHINGTON_COLORS.face, faceProgress, 36);
  drawBrushFillEllipse(ctx, geom.cx - geom.scale * 0.08, geom.cy - geom.scale * 0.16, geom.scale * 0.22, geom.scale * 0.22, WASHINGTON_COLORS.hair, hairProgress, 32);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(geom.cx - geom.scale * 0.11, geom.cy + geom.scale * 0.22);
  ctx.lineTo(geom.cx - geom.scale * 0.40, geom.cy + geom.scale * 0.46);
  ctx.lineTo(geom.cx + geom.scale * 0.40, geom.cy + geom.scale * 0.46);
  ctx.lineTo(geom.cx + geom.scale * 0.11, geom.cy + geom.scale * 0.22);
  ctx.closePath();
  ctx.clip();
  drawBrushFillRect(
    ctx,
    geom.cx - geom.scale * 0.42,
    geom.cy + geom.scale * 0.18,
    geom.scale * 0.84,
    geom.scale * 0.32,
    WASHINGTON_COLORS.clothes,
    clothesProgress,
    34,
  );
  if (clothesProgress > 0.58) {
    drawBrushFillRect(
      ctx,
      geom.cx - geom.scale * 0.11,
      geom.cy + geom.scale * 0.22,
      geom.scale * 0.22,
      geom.scale * 0.26,
      WASHINGTON_COLORS.shirt,
      Math.min(1, (clothesProgress - 0.58) / 0.42),
      22,
    );
  }
  ctx.restore();
}

function phaseProgress(progress, start, end) {
  if (progress <= start) {
    return 0;
  }
  if (progress >= end) {
    return 1;
  }
  const normalized = (progress - start) / (end - start);
  return 1 - Math.pow(1 - normalized, 2);
}

function drawBrushFillEllipse(ctx, cx, cy, rx, ry, color, progress, brushSize) {
  if (progress <= 0) {
    return;
  }

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.clip();
  drawBrushFillRect(ctx, cx - rx, cy - ry, rx * 2, ry * 2, color, progress, brushSize);
  ctx.restore();
}

function drawBrushFillRect(ctx, x, y, width, height, color, progress, brushSize) {
  if (progress <= 0) {
    return;
  }

  const rows = Math.max(1, Math.ceil(height / brushSize));
  const visibleRows = Math.ceil(rows * progress);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (let row = 0; row < visibleRows; row += 1) {
    const rowY = y + row * brushSize + brushSize * 0.52;
    const rowProgress = Math.min(1, progress * rows - row);
    const startX = row % 2 === 0 ? x : x + width;
    const endX = row % 2 === 0 ? x + width * rowProgress : x + width * (1 - rowProgress);
    ctx.beginPath();
    ctx.moveTo(startX, rowY);
    ctx.lineTo(endX, rowY);
    ctx.stroke();
  }
  ctx.restore();
}

function drawOutline(ctx, strokes, canvas, alpha) {
  const geom = portraitGeometry(canvas);
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = "#111111";
  ctx.lineWidth = Math.max(1.55, geom.scale / 420);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (const stroke of strokes) {
    drawPolyline(ctx, stroke.points, geom.scale, geom.offsetX, geom.offsetY);
  }

  ctx.restore();
}

function portraitGeometry(canvas) {
  const canvasSize = Math.min(canvas.width, canvas.height);
  const scale = canvasSize * 0.86;
  return {
    scale,
    offsetX: (canvas.width - scale) / 2,
    offsetY: (canvas.height - scale) / 2,
    cx: canvas.width / 2,
    cy: canvas.height / 2,
  };
}

function drawPolyline(ctx, points, scale, offsetX, offsetY) {
  if (points.length < 2) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(offsetX + points[0][0] * scale, offsetY + points[0][1] * scale);

  for (let index = 1; index < points.length; index += 1) {
    const point = points[index];
    ctx.lineTo(offsetX + point[0] * scale, offsetY + point[1] * scale);
  }

  ctx.stroke();
}

function prepareStrokes(strokes) {
  const prepared = strokes
    .map((stroke) => {
      let pixelLength = 0;
      for (let index = 1; index < stroke.points.length; index += 1) {
        const prev = stroke.points[index - 1];
        const point = stroke.points[index];
        pixelLength += Math.hypot(point[0] - prev[0], point[1] - prev[1]);
      }

      return { ...stroke, pixelLength };
    })
    .filter((stroke) => stroke.pixelLength > 0.002 && !isTextureStroke(stroke));

  prepared.sort((a, b) => {
    const orderDelta = (a.order ?? inferredStrokeOrder(a)) - (b.order ?? inferredStrokeOrder(b));
    if (orderDelta !== 0) {
      return orderDelta;
    }
    return a.y - b.y || a.x - b.x || b.pixelLength - a.pixelLength;
  });

  return prepared;
}

function isTextureStroke(stroke) {
  const area = stroke.w * stroke.h;
  if (stroke.region === "features") {
    return stroke.pixelLength < 0.055 && area < 0.00035;
  }

  return stroke.pixelLength < 0.022 && area < 0.00007;
}

function inferredStrokeOrder(stroke) {
  const cx = stroke.x + stroke.w / 2;
  const cy = stroke.y + stroke.h / 2;
  if (stroke.w > 0.18 && stroke.h > 0.18 && cy < 0.56) {
    return 0;
  }
  if (cy < 0.34) {
    return 1;
  }
  if (((cx - 0.5) / 0.32) ** 2 + ((cy - 0.46) / 0.42) ** 2 <= 1) {
    return 2;
  }
  if (cy > 0.58) {
    return 3;
  }
  return 4;
}

function spinLuckyButton() {
  if (!luckyButton || luckyButton.classList.contains("is-spinning")) {
    return;
  }

  luckyButton.classList.add("is-spinning");
  luckyButton.disabled = true;

  let index = Math.floor(Math.random() * PRESIDENTS.length);
  luckyTimer = setInterval(() => {
    index = (index + 1) % PRESIDENTS.length;
    setLuckyLabel(PRESIDENTS[index]);
  }, 90);

  const selected = PRESIDENTS[Math.floor(Math.random() * PRESIDENTS.length)];
  setTimeout(() => {
    clearInterval(luckyTimer);
    setLuckyLabel(selected);
    luckyButton.classList.remove("is-spinning");
    luckyButton.disabled = false;
    setTimeout(() => {
      window.open(selected.wiki, "_blank", "noopener,noreferrer");
    }, 500);
  }, 1800);
}

function setLuckyLabel(president) {
  if (!luckyName || !luckyNumber) {
    return;
  }

  luckyName.textContent = president.name;
  luckyNumber.textContent = president.number;
}

function setCurrentColor(nextColor, updateSliders = true) {
  currentColor = normalizeHex(nextColor);
  if (colorPicker) {
    colorPicker.value = currentColor;
  }
  if (colorPreview) {
    colorPreview.style.background = currentColor;
  }
  if (colorValue) {
    colorValue.textContent = currentColor.toUpperCase();
  }

  const hsl = hexToHsl(currentColor);
  currentHue = hsl.h;
  currentSaturation = hsl.s;
  currentLightness = hsl.l;

  if (updateSliders) {
    if (saturationPicker) {
      saturationPicker.value = String(Math.round(currentSaturation));
    }
    if (brightnessPicker) {
      brightnessPicker.value = String(Math.round(currentLightness));
    }
  }

  for (const swatch of swatches) {
    swatch.classList.toggle("is-active", normalizeHex(swatch.dataset.color) === currentColor);
  }
}

function updateColorFromSliders() {
  currentSaturation = Number(saturationPicker?.value || currentSaturation);
  currentLightness = Number(brightnessPicker?.value || currentLightness);
  setCurrentColor(hslToHex(currentHue, currentSaturation, currentLightness), false);
}

function normalizeHex(value) {
  if (!value) {
    return "#111111";
  }
  const hex = value.trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(hex)) {
    return hex;
  }
  return "#111111";
}

function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === r) {
      h = (g - b) / delta + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
  const normalizedS = s / 100;
  const normalizedL = l / 100;
  const chroma = (1 - Math.abs(2 * normalizedL - 1)) * normalizedS;
  const hue = h / 60;
  const x = chroma * (1 - Math.abs((hue % 2) - 1));
  const m = normalizedL - chroma / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= hue && hue < 1) {
    r = chroma;
    g = x;
  } else if (1 <= hue && hue < 2) {
    r = x;
    g = chroma;
  } else if (2 <= hue && hue < 3) {
    g = chroma;
    b = x;
  } else if (3 <= hue && hue < 4) {
    g = x;
    b = chroma;
  } else if (4 <= hue && hue < 5) {
    r = x;
    b = chroma;
  } else if (5 <= hue && hue < 6) {
    r = chroma;
    b = x;
  }

  return `#${[r, g, b]
    .map((channel) => Math.round((channel + m) * 255).toString(16).padStart(2, "0"))
    .join("")}`;
}

function initializeCanvases() {
  coloringPage = new ColoringPage(drawCanvas);
  homeColoring = new HomeColoringAnimation(homeCanvas);
  const washingtonStrokes = strokeLibrary["01"];
  if (washingtonStrokes) {
    homeColoring.start(washingtonStrokes);
  }
}

async function loadStrokes() {
  try {
    const response = await fetch("assets/president-strokes.json");
    if (!response.ok) {
      throw new Error(`Could not load coloring data: ${response.status}`);
    }
    strokeLibrary = await response.json();
    initializeCanvases();
    showColoringPage(pendingPresident || PRESIDENTS[0]);
  } catch (error) {
    setDrawStatus("Coloring page data could not load");
    console.error(error);
  }
}

for (const button of tabButtons) {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
}

for (const link of document.querySelectorAll("[data-tab-link]")) {
  link.addEventListener("click", () => activateTab(link.dataset.tabLink));
}

colorPicker?.addEventListener("input", () => setCurrentColor(colorPicker.value));
saturationPicker?.addEventListener("input", updateColorFromSliders);
brightnessPicker?.addEventListener("input", updateColorFromSliders);
clearColorsButton?.addEventListener("click", () => coloringPage?.clearColors());
resetOutlineButton?.addEventListener("click", () => coloringPage?.render());
luckyButton?.addEventListener("click", spinLuckyButton);

for (const swatch of swatches) {
  swatch.addEventListener("click", () => setCurrentColor(swatch.dataset.color));
}

setupCards();
setCurrentColor("#111111");
loadStrokes();

const startingTab = tabFromHash();
if (startingTab && document.getElementById(startingTab)) {
  activateTab(startingTab);
}

window.addEventListener("hashchange", () => {
  const nextTab = tabFromHash();
  if (nextTab && document.getElementById(nextTab)) {
    activateTab(nextTab);
  }
});
