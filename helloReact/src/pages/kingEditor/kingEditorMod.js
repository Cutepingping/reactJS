export default {
  namespace: 'kingEditor',
  state: {
  },
  effects: {

  },
  subscriptions: {
    setup({ dispatch, history }) {

    }
  },
  reducers: {
    updateStore(preState, action) {
      return { ...preState, ...action.payload };
    }
  }
};
