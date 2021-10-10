import { isEmptyObject } from "./utils";

const applyFilter = ({ list = [], filterObj = {} }) => {
    const { pr = {} } = filterObj;
    if (isEmptyObject(pr)) {
        return { list, filterObj }
    }
    const [minPrice = 0, maxPrice = 0] = pr;
    const newList = list.filter(trip => {
        const { farepr = 0 } = trip;
        return minPrice <= farepr && maxPrice >= farepr;
    });
    return { list: newList, filterObj };
}

export default applyFilter;
