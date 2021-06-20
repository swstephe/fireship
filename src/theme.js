const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

function updateTheme(theme) {
  const el = document.body
  el.classList.replace(el.classList[0], theme)
  localStorage.setItem('theme', theme)
}

export function nextTheme(theme) {
  const next = themeMap[theme]
  const el = document.body
  if (el.classList.length === 0) {
    el.classList.add(next)
  } else {
    el.classList.replace(el.classList[0], next)
  }
  localStorage.setItem('theme', next)
  return next
}

