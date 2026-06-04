"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/code.ts
  var require_code = __commonJS({
    "src/code.ts"(exports) {
      var STYLE_TO_WEIGHT = {
        "thin": 100,
        "extralight": 200,
        "extra light": 200,
        "ultralight": 200,
        "ultra light": 200,
        "light": 300,
        "regular": 400,
        "normal": 400,
        "roman": 400,
        "text": 400,
        "book": 400,
        "medium": 500,
        "semibold": 600,
        "semi bold": 600,
        "demibold": 600,
        "demi bold": 600,
        "bold": 700,
        "extrabold": 800,
        "extra bold": 800,
        "ultrabold": 800,
        "ultra bold": 800,
        "black": 900,
        "heavy": 900
      };
      var WEIGHT_TO_PRETENDARD = {
        100: "Thin",
        200: "ExtraLight",
        300: "Light",
        400: "Regular",
        500: "Medium",
        600: "SemiBold",
        700: "Bold",
        800: "ExtraBold",
        900: "Black"
      };
      function toPretendardStyle(style) {
        var _a;
        const normalized = style.toLowerCase().replace(/\s*(italic|oblique)\s*/g, "").trim();
        const weight = (_a = STYLE_TO_WEIGHT[normalized]) != null ? _a : 400;
        const weights = Object.keys(WEIGHT_TO_PRETENDARD).map(Number);
        const closest = weights.reduce((a, b) => Math.abs(b - weight) < Math.abs(a - weight) ? b : a);
        return WEIGHT_TO_PRETENDARD[closest];
      }
      function collectTextNodes(node) {
        if (node.type === "TEXT") return [node];
        if (!("children" in node)) return [];
        const results = [];
        for (const child of node.children) {
          results.push(...collectTextNodes(child));
        }
        return results;
      }
      figma.showUI(__html__, { width: 320, height: 220 });
      figma.ui.onmessage = (msg) => __async(exports, null, function* () {
        if (msg.type !== "convert-fonts") return;
        const roots = figma.currentPage.selection.length > 0 ? figma.currentPage.selection : figma.currentPage.children;
        const textNodes = [];
        for (const root of roots) {
          textNodes.push(...collectTextNodes(root));
        }
        let fixedCount = 0;
        const errors = [];
        for (const node of textNodes) {
          try {
            if (node.fontName === figma.mixed) {
              const len = node.characters.length;
              let i = 0;
              while (i < len) {
                const rangeFont = node.getRangeFontName(i, i + 1);
                let j = i + 1;
                while (j < len) {
                  const nextFont = node.getRangeFontName(j, j + 1);
                  if (nextFont.family !== rangeFont.family || nextFont.style !== rangeFont.style) break;
                  j++;
                }
                const pretendardStyle = toPretendardStyle(rangeFont.style);
                yield figma.loadFontAsync({ family: "Pretendard", style: pretendardStyle });
                node.setRangeFontName(i, j, { family: "Pretendard", style: pretendardStyle });
                fixedCount++;
                i = j;
              }
            } else {
              const fontName = node.fontName;
              const pretendardStyle = toPretendardStyle(fontName.style);
              yield figma.loadFontAsync({ family: "Pretendard", style: pretendardStyle });
              node.fontName = { family: "Pretendard", style: pretendardStyle };
              fixedCount++;
            }
          } catch (e) {
            errors.push(`"${node.name}": ${String(e)}`);
          }
        }
        figma.ui.postMessage({
          type: "result",
          fixedCount,
          totalScanned: textNodes.length,
          errors
        });
      });
    }
  });
  require_code();
})();
