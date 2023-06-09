// this is the code which will be injected into a given page...

(function() {

    if(typeof document.querySelector !== 'function') {
        return
    }

    const checkvalues = ["6", "9", "12", "16", "19", "23", "27", "29", "33", "37", "41", "51", "56", "61", "76", "81", "86", "91", "96", "101", "106", "111", "121", "126", "131", "136", "141", "146", "151", "156", "161", "166", "171", "181", "186", "191", "196"];
    checkvalues.forEach(value => {
        const element = document.querySelector('input[value="${value}"]');
        if (element) {
            element.checked=true;
        }
    });

    document.querySelector('input[value="Submit"]').disabled = false;

})();
