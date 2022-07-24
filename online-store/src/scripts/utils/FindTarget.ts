class FindTarget {
  target: HTMLElement;
  private posters = document.querySelectorAll('.poster');

  constructor(target: HTMLElement) {
    this.target = target;
  }

  find() {
    const targetElement: Element | null | undefined = Array
      .from(this.posters)
      .find(elem => elem === this.target
        || elem === this.target.parentElement
        || elem === this.target.parentElement?.parentElement
        || elem === this.target.parentElement?.parentElement?.parentElement);
    return targetElement;
  }
}

export default FindTarget;