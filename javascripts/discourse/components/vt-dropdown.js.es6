import DropdownSelectBoxComponent from "select-kit/components/dropdown-select-box";
import I18n from "I18n";

export default DropdownSelectBoxComponent.extend({
  classNames: ["vt-dropdown"],

  selectKitOptions: {
    icon: "bars",
    showFullTitle: false,
  },

  content: [
    {
      id: "newest",
      icon: "",
      name: "MỚI NHẤT",
    },
    {
      id: "votes",
      icon: "",
      name: "VOTE NHIỀU NHẤT",
    },
  ],
});
