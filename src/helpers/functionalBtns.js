const funBtn = (v, r) => { 
    if(
        v.key === 'add' || 
        v.key === 'subtract' || 
        v.key === 'multi' ||
        v.key === 'divid'
        ) return action(v.key, r);
        
    if(v.key === 'cDelete') return cDelete(r); 
    if(v.key === 'backspace') return backspace(r); 
    if(v.key === 'equal') return equal(r); 
    // return eval(`${v.key}(r, v.key)`);
}

let saveNum;
let math = '';

function backspace(r){
    if(r === 0) return {valueBtn: r};
    if(r.length < 2) return {valueBtn: String('0')}
    return { valueBtn: String(r.slice(0, -1)) }
}

function cDelete(r) {
    if(!Number(r) && !math) return {valueBtn: r}
    
    math = '';
    saveNum = '';
    
    return {valueBtn: '0'}
}

function action(k, r){
    if(r === '0' || r === 0) return {
        valueBtn: String(0),
        activeBtn: ''
    }
    if(!saveNum){ 
        math = k;
        saveNum = r;
    }
    else {
        return {
            valueBtn: String(r),
            activeBtn: ''
        }
    }
    return {
        valueBtn: String(0),
        activeBtn: k
    }
}

function equal(r) {
    const newSaveNum = saveNum;

    switch (math) {
        case 'add':
            math = '';
            saveNum = '';
            return {valueBtn: String(Number(newSaveNum) + Number(r)), activeBtn: ''};

        case 'subtract':
            math = '';
            saveNum = '';
            return {valueBtn: String(Number(newSaveNum) - Number(r)), activeBtn: ''};

        case 'multi':
            math = '';
            saveNum = '';
            return {valueBtn: String(Number(newSaveNum) * Number(r)), activeBtn: ''};

        case 'divid':
            math = '';
            saveNum = '';
            return {valueBtn: String(Number(newSaveNum) / Number(r)), activeBtn: ''};
    
        default:
            return {valueBtn: String(r)};
    }
}

export default funBtn;