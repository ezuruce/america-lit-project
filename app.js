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

const tabButtons = Array.from(document.querySelectorAll("[data-tab]"));
const pages = Array.from(document.querySelectorAll(".page"));
const presidentCards = Array.from(document.querySelectorAll(".president-card"));
const selectedPresident = document.querySelector(".selected-president");
const drawingStatus = document.querySelector(".drawing-status");
const drawToggle = document.querySelector("#draw-toggle");
const drawCanvas = document.querySelector("#draw-canvas");
const homeCanvas = document.querySelector("#home-canvas");
const luckyButton = document.querySelector("#lucky-button");
const luckyName = luckyButton?.querySelector(".lucky-name");
const luckyNumber = luckyButton?.querySelector(".lucky-number");
const presidentsByLabel = new Map(PRESIDENTS.map((president) => [`${president.name} - ${president.number}`, president]));

let strokeLibrary = {};
let drawAnimator;
let homeAnimator;
let luckyTimer;
let pendingPresident;

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

function selectPresident(president, shouldDraw) {
  for (const item of presidentCards) {
    const isSelected = item.dataset.id === president.id;
    item.classList.toggle("is-selected", isSelected);
    item.setAttribute("aria-pressed", String(isSelected));
  }

  if (selectedPresident) {
    selectedPresident.textContent = `${president.name} - ${president.number}`;
  }

  if (shouldDraw) {
    activateTab("draw");
    startDrawing(president);
  }
}

function setDrawControlVisible(isVisible) {
  if (!drawToggle) {
    return;
  }

  drawToggle.classList.toggle("is-hidden", !isVisible);
  drawToggle.setAttribute("aria-hidden", String(!isVisible));
}

function setDrawStatus(text) {
  if (drawingStatus) {
    drawingStatus.textContent = text;
  }
}

function startDrawing(president) {
  const strokes = strokeLibrary[president.id];
  if (!drawAnimator || !strokes) {
    pendingPresident = president;
    setDrawControlVisible(false);
    setDrawStatus("Loading sketch paths");
    return;
  }

  pendingPresident = undefined;
  drawAnimator.start(strokes, {
    duration: drawingDuration(strokes),
    loop: false,
    onStatus: (status) => {
      if (status === "drawing") {
        setDrawStatus("Drawing in progress");
        setDrawControlVisible(true);
        drawToggle.textContent = "Pause";
      } else if (status === "paused") {
        setDrawStatus("Drawing paused");
        setDrawControlVisible(true);
        drawToggle.textContent = "Resume";
      } else if (status === "complete") {
        setDrawStatus("Sketch complete");
        setDrawControlVisible(false);
      }
    },
  });
}

function drawingDuration(strokes) {
  const totalLength = strokes.reduce((sum, stroke) => sum + stroke.length, 0);
  return 10000 + Math.min(5000, totalLength * 85);
}

function drawPolyline(ctx, points, scale, offsetX, offsetY, uptoLength = Infinity) {
  if (points.length < 2 || uptoLength <= 0) {
    return 0;
  }

  let consumed = 0;
  ctx.beginPath();
  ctx.moveTo(offsetX + points[0][0] * scale, offsetY + points[0][1] * scale);

  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const point = points[index];
    const x1 = offsetX + prev[0] * scale;
    const y1 = offsetY + prev[1] * scale;
    const x2 = offsetX + point[0] * scale;
    const y2 = offsetY + point[1] * scale;
    const segmentLength = Math.hypot(x2 - x1, y2 - y1) / scale;

    if (consumed + segmentLength > uptoLength) {
      const remaining = Math.max(0, uptoLength - consumed);
      const ratio = segmentLength === 0 ? 0 : remaining / segmentLength;
      ctx.lineTo(x1 + (x2 - x1) * ratio, y1 + (y2 - y1) * ratio);
      ctx.stroke();
      return consumed + remaining;
    }

    ctx.lineTo(x2, y2);
    consumed += segmentLength;
  }

  ctx.stroke();
  return consumed;
}

class SketchAnimator {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas?.getContext("2d");
    this.strokes = [];
    this.duration = 12000;
    this.loop = false;
    this.elapsedBeforePause = 0;
    this.startedAt = 0;
    this.frame = 0;
    this.state = "idle";
    this.onStatus = () => {};
    this.tick = this.tick.bind(this);
  }

  clear() {
    if (!this.ctx || !this.canvas) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  start(strokes, options = {}) {
    cancelAnimationFrame(this.frame);
    this.strokes = prepareStrokes(strokes);
    this.totalLength = this.strokes.reduce((sum, stroke) => sum + stroke.pixelLength, 0);
    this.duration = options.duration ?? 12000;
    this.loop = Boolean(options.loop);
    this.onStatus = options.onStatus ?? (() => {});
    this.elapsedBeforePause = 0;
    this.startedAt = performance.now();
    this.state = "drawing";
    this.onStatus("drawing");
    this.clear();
    this.tick();
  }

  pause() {
    if (this.state !== "drawing") {
      return;
    }

    this.elapsedBeforePause += performance.now() - this.startedAt;
    this.state = "paused";
    cancelAnimationFrame(this.frame);
    this.onStatus("paused");
  }

  resume() {
    if (this.state !== "paused") {
      return;
    }

    this.startedAt = performance.now();
    this.state = "drawing";
    this.onStatus("drawing");
    this.tick();
  }

  togglePause() {
    if (this.state === "drawing") {
      this.pause();
    } else if (this.state === "paused") {
      this.resume();
    }
  }

  tick() {
    if (this.state !== "drawing") {
      return;
    }

    const elapsed = this.elapsedBeforePause + performance.now() - this.startedAt;
    const rawProgress = Math.min(1, elapsed / this.duration);
    const progress = 1 - Math.pow(1 - rawProgress, 2.1);
    this.render(progress);

    if (rawProgress >= 1) {
      if (this.loop) {
        this.elapsedBeforePause = 0;
        setTimeout(() => {
          if (this.state === "drawing") {
            this.startedAt = performance.now();
            this.clear();
            this.tick();
          }
        }, 900);
        return;
      }

      this.state = "complete";
      this.onStatus("complete");
      return;
    }

    this.frame = requestAnimationFrame(this.tick);
  }

  render(progress) {
    if (!this.ctx || !this.canvas) {
      return;
    }

    this.clear();
    const ctx = this.ctx;
    const canvasSize = Math.min(this.canvas.width, this.canvas.height);
    const scale = canvasSize * 0.86;
    const offsetX = (this.canvas.width - scale) / 2;
    const offsetY = (this.canvas.height - scale) / 2;
    const targetLength = this.totalLength * progress;
    let drawnLength = 0;

    ctx.strokeStyle = "#111111";
    ctx.lineWidth = Math.max(1.55, canvasSize / 420);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (const stroke of this.strokes) {
      if (drawnLength >= targetLength) {
        break;
      }

      const remaining = targetLength - drawnLength;
      drawPolyline(ctx, stroke.points, scale, offsetX, offsetY, remaining);
      drawnLength += stroke.pixelLength;
    }
  }
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
    .filter((stroke) => stroke.pixelLength > 0.002);

  prepared.sort((a, b) => {
    const orderDelta = (a.order ?? inferredStrokeOrder(a)) - (b.order ?? inferredStrokeOrder(b));
    if (orderDelta !== 0) {
      return orderDelta;
    }

    const aFace = isFaceStroke(a);
    const bFace = isFaceStroke(b);
    if (aFace !== bFace) {
      return aFace ? -1 : 1;
    }
    return a.y - b.y || a.x - b.x || b.pixelLength - a.pixelLength;
  });

  return prepared;
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
  if (isFaceStroke(stroke)) {
    return 2;
  }
  if (cy > 0.58) {
    return 3;
  }
  return 4;
}

function isFaceStroke(stroke) {
  const cx = stroke.x + stroke.w / 2;
  const cy = stroke.y + stroke.h / 2;
  return ((cx - 0.5) / 0.32) ** 2 + ((cy - 0.46) / 0.42) ** 2 <= 1;
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

function initializeAnimations() {
  drawAnimator = new SketchAnimator(drawCanvas);
  homeAnimator = new SketchAnimator(homeCanvas);
  const georgeWashington = PRESIDENTS[0];
  const washingtonStrokes = strokeLibrary[georgeWashington.id];

  if (washingtonStrokes && homeAnimator) {
    homeAnimator.start(washingtonStrokes, {
      duration: 11000,
      loop: true,
    });
  }
}

async function loadStrokes() {
  try {
    const response = await fetch("assets/president-strokes.json");
    if (!response.ok) {
      throw new Error(`Could not load stroke data: ${response.status}`);
    }
    strokeLibrary = await response.json();
    initializeAnimations();
    if (pendingPresident) {
      startDrawing(pendingPresident);
    } else {
      setDrawStatus("Select a president to start the sketch simulation");
    }
  } catch (error) {
    setDrawStatus("Sketch paths could not load");
    console.error(error);
  }
}

for (const button of tabButtons) {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
}

for (const link of document.querySelectorAll("[data-tab-link]")) {
  link.addEventListener("click", () => activateTab(link.dataset.tabLink));
}

drawToggle?.addEventListener("click", () => drawAnimator?.togglePause());
luckyButton?.addEventListener("click", spinLuckyButton);

setupCards();
setDrawControlVisible(false);
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
