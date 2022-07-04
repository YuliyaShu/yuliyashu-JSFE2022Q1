interface SourcesUnit {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

interface SourcesSources extends Array<SourcesUnit> {
    [index: number]: SourcesUnit;
}

// eslint-disable-next-line no-unused-vars
enum Status {
    // eslint-disable-next-line no-unused-vars
    ok = 'ok',
    // eslint-disable-next-line no-unused-vars
    error = 'error',
}

interface SourceInt extends Array<SourcesSources> {
    sources: SourcesSources;
    status: Status.ok;
}

export { SourcesUnit, SourceInt, SourcesSources };
