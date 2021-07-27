export default class Chapter {
  constructor (label = null, order = null) {
    if (label) this.label = label
    if (order) this.order = order
  }

  get isNew () {
    return this.id === undefined
  }

  static build (data) {
    const chapter = new Chapter(data.label)

    if (data.id) chapter.id = data.id

    if (data.label) chapter.label = data.label

    if (data.order) this.order = data.order

    return chapter
  }
}
