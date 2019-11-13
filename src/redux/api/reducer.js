import {
    PAGE_LOAD,
    PAGE_LOADED
} from '../actions';

const INIT_STATE = {
    problems: [],
    problems_page: 0,
    problems_pages: 0,      // total page count
    problems_loading: false,

    passages: [],
    passages_page: 0,
    passages_pages: 0,      // total page count
    passages_loading: false,

    lessons: [],
    lessons_page: 0,
    lessons_pages: 0,        // total page count
    lessons_loading: false,
}


export default (state = INIT_STATE, action) => {
    console.log('*************', action);
	switch (action.type) {
		case PAGE_LOAD:
			return { ...state, problems_loading: false, page: action.payload };

		case PAGE_LOADED:
				console.log(action.payload.type, action.payload.page, action.payload.results);

				if (action.payload.type === 'problems') {
						let keep_data = [];
						if (action.payload.page > 0) {
							keep_data = state.problems;
						}
						return { 
								...state, 
								problems_loading: true, 
								problems_page: action.payload.page, 
								problems_pages: action.payload.results.pages, 
								problems: [...keep_data, ...action.payload.results.problems] 
						};
				}
				else if (action.payload.type === 'passages') {
						let keep_data = [];
						if (action.payload.page > 0) {
							keep_data = state.passages;
						}

						return { 
								...state, 
								passages_loading: true, 
								passages_page: action.payload.page, 
								passages_pages: action.payload.results.pages, 
								passages: [...keep_data, ...action.payload.results.passages] 
						};
				}
				else if (action.payload.type === 'lessons') {
						let keep_data = [];
						if (action.payload.page > 0) {
							keep_data = state.lessons;
						}

						return { 
								...state, 
								lessons_loading: true, 
								lessons_page: action.payload.page, 
								lessons_pages: action.payload.results.pages, 
								lessons: [...keep_data, ...action.payload.results.lessons] 
						};
				}

		default: return { ...state };
	}
}
