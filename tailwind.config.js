/* ================================================
   Art-Vida Capoeira - tailwind.config.js
   Configuração do Tailwind CSS com tema customizado
   ================================================ */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-container":          "#fecb00",
        "surface-dim":                  "#dadad7",
        "tertiary":                     "#00477d",
        "on-secondary-fixed-variant":   "#584400",
        "on-tertiary-fixed-variant":    "#00487f",
        "outline-variant":              "#bec9bf",
        "on-secondary":                 "#ffffff",
        "error":                        "#ba1a1a",
        "on-tertiary-fixed":            "#001c37",
        "on-secondary-container":       "#6e5700",
        "on-primary-fixed-variant":     "#00522f",
        "tertiary-fixed":               "#d2e4ff",
        "primary-container":            "#006b3f",
        "surface-container-highest":    "#e2e3df",
        "secondary-fixed":              "#ffe08b",
        "on-primary":                   "#ffffff",
        "on-secondary-fixed":           "#241a00",
        "tertiary-container":           "#185f9f",
        "on-primary-container":         "#91e9b1",
        "surface":                      "#faf9f6",
        "outline":                      "#6f7a71",
        "background":                   "#faf9f6",
        "on-background":                "#1a1c1a",
        "surface-tint":                 "#046d40",
        "surface-bright":               "#faf9f6",
        "on-surface":                   "#1a1c1a",
        "inverse-primary":              "#81d9a2",
        "secondary":                    "#745b00",
        "primary-fixed":                "#9df5bd",
        "secondary-fixed-dim":          "#f1c100",
        "surface-container-low":        "#f4f4f0",
        "surface-container-lowest":     "#ffffff",
        "error-container":              "#ffdad6",
        "primary":                      "#00502e",
        "inverse-surface":              "#2f312f",
        "surface-container":            "#eeeeea",
        "tertiary-fixed-dim":           "#a1c9ff",
        "surface-container-high":       "#e8e8e5",
        "on-surface-variant":           "#3f4941",
        "on-tertiary-container":        "#bdd8ff",
        "on-error":                     "#ffffff",
        "on-error-container":           "#93000a",
        "on-tertiary":                  "#ffffff",
        "surface-variant":              "#e2e3df",
        "primary-fixed-dim":            "#81d9a2",
        "inverse-on-surface":           "#f1f1ed"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg:      "0.5rem",
        xl:      "0.75rem",
        full:    "9999px"
      },
      spacing: {
        "margin-mobile":   "16px",
        "container-max":   "1280px",
        "unit":            "8px",
        "gutter":          "24px",
        "margin-desktop":  "64px"
      },
      fontFamily: {
        "label-sm":    ["Inter"],
        "body-lg":     ["Inter"],
        "headline-lg": ["Montserrat"],
        "display-lg":  ["Montserrat"],
        "headline-md": ["Montserrat"],
        "body-md":     ["Inter"]
      },
      fontSize: {
        "label-sm":    ["12px", { lineHeight: "16px",  fontWeight: "600" }],
        "body-lg":     ["18px", { lineHeight: "28px",  fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px",  fontWeight: "700" }],
        "display-lg":  ["48px", { lineHeight: "56px",  letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-md": ["24px", { lineHeight: "32px",  fontWeight: "700" }],
        "body-md":     ["16px", { lineHeight: "24px",  fontWeight: "400" }]
      }
    }
  }
};
