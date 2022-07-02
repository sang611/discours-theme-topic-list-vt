import { computed, defineProperty } from "@ember/object";
import showModal from "discourse/lib/show-modal";
import I18n from "I18n";
import bootbox from "bootbox";
import DiscourseUrl from 'discourse/lib/url';
import discourseComputed from "discourse-common/utils/decorators";
import OpenComposer from "discourse/mixins/open-composer";

export default {
  setupComponent(args, component) {
    component.setProperties({
      label: I18n.t("post.submit"),
    });
  },
  actions: {
    newPost2(action){
      $("#create-topic").click()
    },
    test(action){
      console.log(this)
      switch (action) {
        case "votes":
          // this.toggleProperty("importIdentity");
          DiscourseUrl.routeTo("mostlike");
          break;
        case "newest":
          DiscourseUrl.routeTo("latest");
          // showModal("reset-key-pair", { model: this.model });
          break;
      }
    }
  },
};
