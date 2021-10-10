import moment from 'moment';

const formatTravelTime = (mins) => {
    const h = Math.floor(mins / 3600),
        m = Math.floor(mins % 3600 / 60),
        s = Math.floor(mins % 3600 % 60);
    return `${h ? `${h}h ` : ''}${m ? `${m}m ` : ''}${s ? `${s}s ` : ''}`;
};

const deStructureFlight = (flight) => {
    const { pLeg = [], farepr = 0 } = flight,
        [firstLeg = []] = pLeg,
        [firstFlight = {}] = firstLeg,
        { dt = '', at = '', ft = 0 } = firstFlight;
    return { dt, at, ft, farepr };
}

const sortWithDepart = (isAsc) => {
    return (a, b) => {
        const { dt: adt = '' } = deStructureFlight(a),
            { dt: bdt = '' } = deStructureFlight(b);
        if (!isAsc)
            return moment(bdt, "hh:mm").diff(moment(adt, "hh:mm")) > 0 ? 1 : -1;
        return moment(adt, "hh:mm").diff(moment(bdt, "hh:mm")) > 0 ? 1 : -1;
    }
}

const sortWithArival = (isAsc) => {
    return (a, b) => {
        const { at: aat = '' } = deStructureFlight(a),
            { at: bat = '' } = deStructureFlight(b);
        if (!isAsc)
            return moment(bat, "hh:mm").diff(moment(aat, "hh:mm")) > 0 ? 1 : -1;
        return moment(aat, "hh:mm").diff(moment(bat, "hh:mm")) > 0 ? 1 : -1;
    }
}

const sortWithDuration = (isAsc) => {
    return (a, b) => {
        const { ft: aft = '' } = deStructureFlight(a),
            { ft: bft = '' } = deStructureFlight(b);
        if (!isAsc)
            return bft - aft;
        return aft - bft;
    }
}

const sortWithPrice = (isAsc) => {
    return (a, b) => {
        const { farepr: afarepr = '' } = deStructureFlight(a),
            { farepr: bfarepr = '' } = deStructureFlight(b);
        if (!isAsc)
            return bfarepr - afarepr;
        return afarepr - bfarepr;
    }
}

const applySorting = (list, sortObj) => {
    const newList = [...list];
    const firstKey = Object.keys(sortObj)[0] || '';
    switch (firstKey) {
        case "depart": {
            newList.sort(sortWithDepart(sortObj[firstKey]));
            break;
        }
        case "arrive": {
            newList.sort(sortWithArival(sortObj[firstKey]));
            break;
        }
        case "duration": {
            newList.sort(sortWithDuration(sortObj[firstKey]));
            break;
        }
        case "price": {
            newList.sort(sortWithPrice(sortObj[firstKey]));
            break;
        }
    }
    return newList;
}

const isEmptyObject = (obj) => {
    return Object.keys(obj).length == 0;
}

const formatPrice = (number, curr = 'INR', noStyle) => {
    return new Intl.NumberFormat(
        'en-IN', {
        style: 'currency',
        currency: curr,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

export {
    formatTravelTime, applySorting,
    isEmptyObject, formatPrice
};
