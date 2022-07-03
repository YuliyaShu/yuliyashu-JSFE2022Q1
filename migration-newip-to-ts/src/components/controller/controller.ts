import { SourceInt } from '../interfaces/sourcesInterface';
import { CallBack } from '../types/callbackType';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: CallBack<SourceInt>) {
        super.getResp<SourceInt>({ endpoint: 'sources' }, callback);
    }

    getNews<SourceInt>(e: Event, callback: CallBack<SourceInt>) {
        console.log(e);
        console.log(callback);
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;
        console.log(newsContainer);
        console.log(target.getAttribute('data-source-id'));
        const sourceId = target.getAttribute('data-source-id') as string;

        while (target !== newsContainer) {
            if (target) {
                if (target.classList.contains('source__item')) {
                    console.log(sourceId);
                    if (newsContainer && sourceId) {
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            newsContainer.setAttribute('data-source', sourceId);
                            super.getResp(
                                {
                                    endpoint: 'everything',
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                    }
                    return;
                }
                target = <HTMLElement>target.parentNode;
            }
        }
    }
}

export default AppController;
