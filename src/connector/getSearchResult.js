import ExternalApiRequest from './../services/externalApi';
import sample from './../actions/sample.json';

const getSearchResult = async (params) => {
    // const response = await ExternalApiRequest({
    //     url: 'https://mocki.io/v1/fe40313a-221a-4614-9aab-1aadcbd566cc'
    // });
    return sample;
}

export default getSearchResult;