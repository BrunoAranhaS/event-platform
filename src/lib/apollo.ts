import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient(
    {
        uri: "https://api-sa-east-1.graphcms.com/v2/cl4owzjnl166a01xnbd35ao4n/master",
        cache: new InMemoryCache()
    }
);