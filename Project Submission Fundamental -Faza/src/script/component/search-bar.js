class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 1000px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 8px;
          display: flex;
          position: sticky;
          top: 5px;
          background-color: white;
        }
       
        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid #790252;
          font-weight: bold;
          color: #E80F88;
          font-family: sans-serif;
        }
       
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid #790252;
        }
       
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
        
        .search-container >  input::placeholder {
          color: #E80F88;
          font-weight: normal;
        }
       
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: #E80F88;
          color: white;
          border: 0;
          text-transform: uppercase;
        }
       
        @media screen and (max-width: 550px){
          .search-container {
            flex-direction: column;
            position: static;
          }
     
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
     
          .search-container > button {
            width: 100%;
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search cocktail name" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
