import Component from './core/Component.js';
import Breadcrumb from './components/Breadcrumb.js';
// import Nodes from './components/Nodes.js';

export default class App extends Component {
  
  setup () {
    this.$state = {
      isRoot: false,
      breadcrumb: [
        {href:'/', name:'root'}, {href:'/', name:'one'}, {href:'/', name:'two'}
      ]
    }
  }

  mounted () {
    const { breadcrumb } = this

    new Breadcrumb(this.$target, this.$state.breadcrumb)
  }
  // constructor(root) {
  //   this.root = root;
  //   this.breadcrumb = new Breadcrumb(this.root);
  //   //new Breadcrumb(this.root);
  // }
}
