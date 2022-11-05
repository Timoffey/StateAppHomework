import {createStore} from 'vuex';

export default createStore({
	state: {
		states: [],
		displayInfo: null,
		filter: ''
	},

	getters: {
		getStates(state) {
			return state.states;
		},
		getDisplayInfo(state) {
			return state.displayInfo;
		},
		getFilter(state) {
			return state.filter;
		}
	},

	mutations: {
		setStates(state, states) {
			state.states = states;
		},
		setDisplayInfo(state, info) {
			state.displayInfo = info;
		},
		setFilter(state, text) {
			state.filter = text;
		}
	},

	actions: {
		async fetchStates(ctx) {
			const resp = await fetch(
				'http://pos.idtretailsolutions.com/countytest/states'
			);
			const states = (await resp.json()).data;
			ctx.commit('setStates', states);
		},
		async setInfo(ctx, item) {
			const resp = await fetch(item.detail);
			const countiesList = (await resp.json()).data;
			const info = {...item, countiesList};
			ctx.commit('setDisplayInfo', info);
		},
		applyFilter(ctx, text) {
			ctx.commit('setFilter', text);
		},
		clearFilter(ctx) {
			ctx.commit('setFilter', '');
		}
	},
});
