class FindTarget {
  target: HTMLElement;
  private posters = document.querySelectorAll('.poster');
  private posterImage = document.querySelectorAll('.poster__img');
  private posterInfo = document.querySelectorAll('.poster__info');
  private posterButton = document.querySelectorAll('.poster__button');
  private posterInfoName = document.querySelectorAll('.poster__info-name');
  private posterInfoDesigner = document.querySelectorAll('.poster__info-designer-year');
  private posterInfoDiff = document.querySelectorAll('.poster__info-diff');
  private posterInfoDiffP = document.querySelectorAll('.poster__info-diff p');
  private posterInfoPrize = document.querySelectorAll('.poster__info-prize');

  constructor(target: HTMLElement) {
    this.target = target;
  }

  find() {
    let targetElement: Element | null | undefined;
      for (let i = 0; i < this.posters.length; i += 1) {
        switch(this.target) {
          case this.posters[i]:
            targetElement = this.posters[i];
            break;

          case this.posterImage[i]:
            targetElement = this.posterImage[i].parentElement;
            break;

          case this.posterInfo[i]:
            targetElement = this.posterInfo[i].parentElement;
            break;

          case this.posterButton[i]:
            targetElement = this.posterButton[i].parentElement;
            break;

          case this.posterInfoName[i]:
            targetElement = this.posterInfoName[i].parentElement?.parentElement;
            break;

          case this.posterInfoDesigner[i]:
            targetElement = this.posterInfoDesigner[i].parentElement?.parentElement;
            break;

          case this.posterInfoDiff[i]:
            targetElement = this.posterInfoDiff[i].parentElement?.parentElement;
            break;

          case this.posterInfoPrize[i]:
            targetElement = this.posterInfoPrize[i].parentElement?.parentElement;
            break;

          case this.posterInfoDiffP[i]:
            targetElement = this.posterInfoDiffP[i].parentElement?.parentElement?.parentElement;
            break;
      }
    }
    return targetElement;
  }
}

export default FindTarget;