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

interface SourceInt extends Array<SourcesSources> {
    sources: SourcesSources;
    status: string;
}

export { SourcesUnit, SourceInt, SourcesSources };
