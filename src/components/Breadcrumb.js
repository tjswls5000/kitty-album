import Component from '../core/Component.js';

export default class Breadcrumb extends Component {
  setup() {
    this.$state = { paths: this.$props };
    //[{href:'/', name:'root'},{href:'/', name:'one'},{href:'/', name:'two'}]
  }

  template() {
    const { paths } = this.$state;
    return `
      <nav class="breadcrumb">
        ${paths.map(path => `
          <div>
            <a href="${path.href}">${path.name}</a>
          </div>
        `).join('')}
      </nav>
    `;
  }

}