<script>
  import {onMount} from "svelte";

  let theme = localStorage.getItem('theme') || 'dark';
  import NavBar from './components/NavBar.svelte'
  import Main from './components/Main.svelte'

  onMount(async() => {
    document.body.classList.add(theme)
  })
</script>

<svelte:head>
  <title>Fireship ({theme})</title>
</svelte:head>

<NavBar bind:theme={theme} />
<Main />
