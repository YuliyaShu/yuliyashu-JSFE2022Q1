import createMyElement from '../utils/createMyElement';

function Footer(): HTMLElement {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const container = createMyElement(footer, { type: 'div', className: ['footer__container', 'container'] });
  const footerWrapper = createMyElement(container.element, { type: 'div', className: ['footer__wrapper'] });

  createMyElement(footerWrapper.element, {
    type: 'a',
    className: ['footer__links'],
    innerText: 'YuliyaShu august 2022',
    attributes: [['href', 'https://github.com/YuliyaShu']],
  });

  const schoolLink = createMyElement(footerWrapper.element, {
    type: 'a',
    className: ['footer__links'],
    attributes: [['href', 'https://rs.school/']],
  });

  createMyElement(schoolLink.element, {
    type: 'img',
    attributes: [['src', './assets/images/rs_school_js.svg'], ['alt', 'rsschool-logo']],
  });

  return footer;
}

export default Footer;
