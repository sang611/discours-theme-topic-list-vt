import { apiInitializer } from "discourse/lib/api";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { withPluginApi } from 'discourse/lib/plugin-api';
import discourseComputed, {
  on,
  observes,
} from "discourse-common/utils/decorators";

const PLUGIN_ID = "topic-list-previews-t2222c";

export default {
  name: 'preview-route-edits2',
  initialize(container){
    withPluginApi('0.8.12', api => {
    });
  }
};
