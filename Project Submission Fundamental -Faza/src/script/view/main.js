import '../component/cocktail-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
import 'regenerator-runtime';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const cocktailListElement = document.querySelector('cocktail-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCocktail(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    cocktailListElement.cocktails = results;
  };

  const fallbackResult = message => {
    cocktailListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;