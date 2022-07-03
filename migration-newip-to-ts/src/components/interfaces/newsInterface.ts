interface NewsSource {
    id: string;
    name: string;
}

interface NewsUnit {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: NewsSource;
    title: string;
    url: string;
    urlToImage: string;
}

interface Articles extends Array<NewsUnit> {
    [index: number]: NewsUnit;
}

// enum Status {
//     Ok = "ok",
//     Error = "error"
// }

interface NewsInt {
    articles: Articles;
    status: string;
    totalResults: number;
}

export { NewsUnit, NewsInt, Articles };
