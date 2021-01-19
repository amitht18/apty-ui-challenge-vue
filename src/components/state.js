import cityData from "./../data/data.json";
import {createStore} from 'vuex';

const store = createStore({
    state: cityData,
    mutations: {
        setCardView(state) {
            state.previewInListMode = false;
        },
        setListView(state) {
            state.previewInListMode = true;
        },
        toggleCityLike(state, {id}) {
             const like = state.cities.find(city => city.id === id).liked
            state.cities.find(city => city.id === id).liked = !like;
        },
        addCityComment(state, {id}) {
        const message = state.cities.find(city => city.id === id).comment
        state.cities.find(city => city.id === id).comment = message !== '' ? '' : 'Amazing';
       }
    }
});

export default store;