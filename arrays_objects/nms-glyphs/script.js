const originalGlyphs = ["A", "B", "C", "D", "E", "F", "G"];
const glyphContainer = document.querySelector(".glyph-container");

originalGlyphs.forEach((glyph, index) => {
  const div = document.createElement("div");
  div.classList.add("glyph");
  div.innerHTML = `${glyph}`;
  glyphContainer.appendChild(div);
});
const glyphs = document.querySelectorAll(".glyph");
console.log(originalGlyphs.length);

let glyphArr = [];

glyphs.forEach((glyph) => {
  glyph.addEventListener("click", (e) => {
    const clickedGlyph = e.target.textContent;
    console.log(clickedGlyph);
    if (glyphArr.length < originalGlyphs.length) {
      glyphArr.push(clickedGlyph);
      const newGlyph = document.createElement("div");
      newGlyph.classList.add("glyph");
      newGlyph.textContent = clickedGlyph;
      const selectedGlyphs = document.querySelector(".clicked-glyphs");
      selectedGlyphs.appendChild(newGlyph);
    } else {
      alert("No more available slots.");
    }
  });
});
