import { default as computed } from 'discourse-common/utils/decorators';
import ModalFunctionality from 'discourse/mixins/modal-functionality';
import { bufferedProperty } from "discourse/mixins/buffered-content";

export default Ember.Controller.extend(ModalFunctionality, bufferedProperty("model"), {
  thumbnailList: Ember.computed.oneWay('model.thumbnails'),
  modal_topic_title: Ember.computed.oneWay('model.topic_title'),
  buffered: Ember.computed.alias('model.buffered'),

  actions: {
    selectThumbnail: function(image_url, image_upload_id){
      const buffered = this.get('buffered');
      this.set("buffered.user_chosen_thumbnail_url", image_url);
      this.set("buffered.image_upload_id", image_upload_id);
      this.send('closeModal');
    }
  }
});
