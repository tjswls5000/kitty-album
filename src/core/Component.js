export default class Coponent {
  $target
  $props
  $state
  constructor($target, $props) {
    this.$target = $target
    this.$props = $props
    this.setup()
    this.setEvents()
    this.render()
  }

  setup() {}
  mounted() {}
  template() {return ''}
  render() {
    this.$target.innerHTML = this.template()
    this.mounted()
  }
  setEvents() {}
  setState(newState) {
    this.$state = {...this.$state, ...newState}
    this.render()
  }

  addEvent (eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)]
    const isTarget = (target) => children.includes(target)
                                 || target.closest(selector)
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest(Web API)를 이용하여 처리한다.
    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false
      callback(event)
    })
  }
}