<script>
  import '../styles/global.css'
  import "../app.css";
</script>


<header>
    <h2>Testseiten-Überschrift</h2>
</header>

<main>
    <div id="grad">Ein toller Farbverlauf</div>
    <slot></slot>
</main>

<footer>
    <h3>Testseiten-Footer</h3>
</footer>


<style>
header, footer {
  max-width: 960px;
  display: flex;
  border-radius: 15px;
  margin: 40px auto;
  padding: 40px auto;
  justify-content: center;
  background-color: white;
  box-shadow: 5px 5px 10px gray;
}

main {
  max-width: 960px;
  margin: 40px auto;
  background-color: aliceblue;
}


#grad {
  background-image: linear-gradient(to right, red , yellow);
  font-style: italic;
  color: blue;
}

</style>