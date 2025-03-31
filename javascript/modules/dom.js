export const dom = {

    els: {},

    consoleLogEls: function() {
        console.log("***********");
        console.log("dom.els:");
        Object.keys(this.els).sort().forEach(key => {
            console.log(key);
        });
        console.log("***********");
    },

    createElVars: function () {
        const ids = document.querySelectorAll('[id]')
        Array.from(ids).forEach(el => {
            this.els[toCamelCase(el.id)] = el;
        });
        // this function converts hyphenated names to camel case names
        function toCamelCase(hypenatedName){
             return hypenatedName.replace(
                /-([a-z])/g,
                // hyphen (first part of the match) is not used used
                function (hyphen, letterAfterHyphen) {
                    return letterAfterHyphen.toUpperCase();
                }
            );
        }
    },
    
    showDiv: function (divsToShow) {
        Object.keys(this.els).forEach(elKey => {
            if (this.els[elKey].tagName === "DIV") {
                this.els[elKey].classList.add("hide");
            }
        })
        divsToShow.forEach(divToShow => {
            this.els[divToShow].classList.remove("hide");
        })
    }
}
