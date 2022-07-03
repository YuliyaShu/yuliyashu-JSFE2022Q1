import './sources.css';
import { SourcesUnit, SourcesSources } from '../../interfaces/sourcesInterface';

class Sources {
    draw(data: SourcesSources): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourcesUnit) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as DocumentFragment;

            const sourceCloneElement: HTMLElement | null = sourceClone?.querySelector('.source__item-name');
            if (sourceCloneElement) {
                sourceCloneElement.textContent = item.name;
                sourceCloneElement.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        document.querySelector<HTMLElement>('.sources')?.append(fragment);
    }
}

export default Sources;
