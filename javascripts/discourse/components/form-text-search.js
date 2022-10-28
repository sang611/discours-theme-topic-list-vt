import Component from "@ember/component";
import KeyEnterEscape from "discourse/mixins/key-enter-escape";
import { popupAjaxError } from "discourse/lib/ajax-error";
import { ajax } from "discourse/lib/ajax";
import { renderAvatar } from "discourse/helpers/user-avatar";
import DiscourseUrl from 'discourse/lib/url';
import TopicList from "discourse/models/topic-list";

export default Component.extend(KeyEnterEscape, {
    init() {
        this._super(...arguments);
    },

    actions: {
        
        search(e) {
            console.log($('#form-search-input'));
            DiscourseUrl.routeTo(`/vtsearch?q=${$('#form-search-input').val()}`); 
        }
    }
})
