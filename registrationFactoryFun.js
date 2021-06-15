function registration(regList) {
    var regNumlist = regList || [];
    var regex = /(^[A-Z]{2}[0-9]{3}$)/ | /(^[A-Z]{3}[0-9]{3}(-)[0-9]{3}$)/ | /(^[A-Z]{2}[0-9]{6}$)/;



    function storeRegNum(regNum) {
        if (regNum) {
            if (!regNumlist.includes(regNum)) {
                regNumlist.push(regNum);

            }

        }
    }
    
    function registeredNum() {
        return regNumlist;
    }
    
    
    function capeReg() {
        var townReg = [];
        for (var i = 0; i < regNumlist.length; i++) {
            
            if (regNum.startWith('CA')) {
                townReg.push(regNumlist)
            
            }
        }
        return townReg.filter(regNumlist);
    }



    return {
        
        storeRegNum,
        registeredNum,
        capeReg,

    }
}