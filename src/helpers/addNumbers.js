function add(v, s){ 
    const number = v + s,
          vn = Number(v),
          vs = String(v);

    if(number.length > 10) return v;
    
    // Prevent print 00 when the output is 0
    if(s === '00' && number < 1 && !number.includes('.')) return String(0);

    if(v <= '0.9' && s === '00') return String(v + s);


    // Check if tiene punto para seguirlo
    if(v === '0' && s !== '.') return String(s);

    // Prevent double .
    let n = v;
    if(v.includes('.')) {
        n = v.replace('.', '');

        if(number.split('.').length > 2){
            return v;
        }
    }
    // Prevent output extend 9 degit
    if(n.length > 8) return v;

    return number;
}

export default add;
