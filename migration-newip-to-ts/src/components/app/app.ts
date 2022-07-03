import AppController from '../controller/controller';
import { NewsInt } from '../interfaces/newsInterface';
import { SourceInt } from '../interfaces/sourcesInterface';
import AppView from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesStart: HTMLElement | null = document.querySelector('.sources');
        if (sourcesStart)
            sourcesStart.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data) => {
                    this.view.drawNews(data as NewsInt);
                })
            );
        this.controller.getSources((data) => this.view.drawSources(data as SourceInt));
    }
}

export default App;
