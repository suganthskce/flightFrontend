import indigo from "../../public/img/6E.png";
import airIndia from "../../public/img/AI.png";
import vistara from "../../public/img/UK.png";

const airlines = (() => {
    return {
        names: {
            '6E': 'IndiGo',
            'AI': 'Air India',
            'UK': 'Vistara'
        },
        images: {
            '6E': indigo,
            'AI': airIndia,
            'UK': vistara
        },

    };
})();
export default airlines;
