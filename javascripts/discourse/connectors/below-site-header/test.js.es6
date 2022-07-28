import { computed, defineProperty } from "@ember/object";
import showModal from "discourse/lib/show-modal";
import I18n from "I18n";
import bootbox from "bootbox";
import DiscourseUrl from 'discourse/lib/url';
import discourseComputed from "discourse-common/utils/decorators";
import OpenComposer from "discourse/mixins/open-composer";
import ComposerEditor, {
  addComposerUploadHandler,
  addComposerUploadMarkdownResolver,
  addComposerUploadPreProcessor,
} from "discourse/components/composer-editor";


export default {
  setupComponent(args, component) {
    component.setProperties({
      label: I18n.t("post.submit"),
    });
  },
  actions: {
    newPost2(action){
      $("#create-topic").click();
      $('#modal-wrapper').addClass('modal-wrapper')
      // let controller = showModal('modal-create-topic', {model: {}})
    },
    test(action){
      switch (action) {
        case "votes":
          // this.toggleProperty("importIdentity");
          DiscourseUrl.routeTo("/mostlike");
          break;
        case "newest":
          DiscourseUrl.routeTo("/latest");
          // showModal("reset-key-pair", { model: this.model });
          break;
      }
    }
  },
};
