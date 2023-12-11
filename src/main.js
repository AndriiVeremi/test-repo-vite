import {
  getBodyPartsList,
  getMusclesList,
  getEquipmentList,
  getFilteredList,
} from './js/api';
import { markupCategories } from './js/markupCategories';

const items = document.querySelector('.cards');
const filter = document.querySelector('.filter-list');
filter.addEventListener('click', handlerClickCategory);

getBodyPartsList()
  .then(response => {
    const data = response.results;
    console.log(data);
    items.insertAdjacentHTML('beforeend', markupCategories(data));
  })
  .catch(err => {
    console.error(err);
  });

function handlerClickCategory(e) {

  if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    const categoryName = e.target.dataset.name; 
    console.log(categoryName);

    getFilteredList(categoryName)
      .then(response => {
        const data = response.results;
        console.log(data);
        items.innerHTML = markupCategories(data);
      })
      .catch(err => {
        console.error(err);
      });
}
