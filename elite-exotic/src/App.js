import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <nav>
        <h1>Nav Bar [upper-right]</h1>
        <p>checklist for rental</p>
      </nav>
      <section>
        <h1>Car Categories [as cards]</h1>
        <p>Carousel</p>
        <ul>
          <li>
            Cards w/Car Category
          </li>
          <li>
            L - R arrows to scroll thru Car Category
          </li>
          <li>
            Clickable Image to details of specific car
          </li>
          <li>
            Car details [year, make, model]
          </li>
          <li>
            5-7 pics [interior/exterior]
          </li>
        </ul>
      </section>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default App;
