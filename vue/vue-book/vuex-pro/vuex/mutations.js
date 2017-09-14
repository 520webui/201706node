 import * as Types from './mutation-types';

const mutations = {
  [Types.INCREMENT](state){
    state.number++;
  },
  [Types.DECREMENT](state){
    state.number--;
  }
};
export default mutations;

