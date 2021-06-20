import { createStore } from 'vuex'

const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
}

const currentTheme = localStorage.getItem('theme') || 'dark'

export default createStore({
  state () {
    document.body.classList.add(currentTheme)
    return {
      theme: currentTheme
    }
  },
  mutations: {
    nextTheme (state) {
      const next = themeMap[state.theme]
      document.body.classList.replace(state.theme, next)
      localStorage.setItem('theme', next)
      state.theme = next
    }
  }
})
