<script>
  import {nextTheme} from "../theme.js"
  import LogoIcon from '../icons/LogoIcon.svelte';
  import CatIcon from '../icons/CatIcon.svelte';
  import AlienIcon from "../icons/AlienIcon.svelte";
  import SpaceIcon from "../icons/SpaceIcon.svelte";
  import ShuttleIcon from "../icons/ShuttleIcon.svelte";
  import LightIcon from "../icons/LightIcon.svelte";
  import SolarIcon from "../icons/SolarIcon.svelte";
  import DarkIcon from "../icons/DarkIcon.svelte";

  export let theme;

  function handleNextTheme(e) {
    theme = nextTheme(theme)
    e.preventDefault()
  }

</script>

<nav class="navbar">
  <ul class="navbar-nav">
    <li class="logo">
      <a href="." class="nav-link">
        <span class="link-text logo-text">Fireship</span>
        <LogoIcon />
      </a>
    </li>
    <li class="nav-item">
      <a href="." class="nav-link">
        <CatIcon />
        <span class="link-text">Cats</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="." class="nav-link">
        <AlienIcon />
        <span class="link-text">Aliens</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="." class="nav-link">
        <SpaceIcon />
        <span class="link-text">Space</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="." class="nav-link">
        <ShuttleIcon />
        <span class="link-text">Shuttle</span>
      </a>
    </li>
    <li class="nav-item" id="themeButton">
      <a href="." class="nav-link" on:click={handleNextTheme}>
        <LightIcon />
        <SolarIcon />
        <DarkIcon />
        <span class="link-text">Themify</span>
      </a>
    </li>
  </ul>
</nav>

<style>
    .navbar {
        position: fixed;
        background-color: var(--bg-primary);
        transition: width 600ms ease;
        overflow: scroll;
    }

    .navbar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    .nav-item {
        width: 100%;
    }

    .nav-item:last-child {
        margin-top: auto;
    }

    .nav-link {
        display: flex;
        align-items: center;
        height: 5rem;
        color: var(--text-primary);
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }

    .nav-link:hover {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    }

    .link-text {
        display: none;
        margin-left: 1rem;
    }

    .logo {
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
        text-align: center;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        font-size: 1.5rem;
        letter-spacing: 0.3ch;
        width: 100%;
    }

    .logo-text
    {
        display: inline;
        position: absolute;
        left: -999px;
        transition: var(--transition-speed);
    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        .navbar {
            bottom: 0;
            width: 100vw;
            height: 5rem;
        }

        .logo {
            display: none;
        }

        .navbar-nav {
            flex-direction: row;
        }

        .nav-link {
            justify-content: center;
        }
    }

    /* Large screens */
    @media only screen and (min-width: 600px) {
        .navbar {
            top: 0;
            width: 5rem;
            height: 100vh;
        }

        .navbar:hover {
            width: 16rem;
        }

        .navbar:hover .link-text {
            display: inline;
        }

        .navbar:hover .logo svg {
            margin-left: 11rem;
        }

        .navbar:hover .logo-text {
            left: 0;
        }
    }
</style>