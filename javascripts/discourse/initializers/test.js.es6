import { withPluginApi } from 'discourse/lib/plugin-api';

const PLUGIN_ID = "topic-list-test-plugin";

export default {
  name: 'test-plugin',
  initialize(container){
    withPluginApi("0.11.1", (api) => this.initWithApi(api));
  },

  initWithApi(api) {
    console.log(">>>>> api: ", api);
  }
};
