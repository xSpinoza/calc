const detectKey = (key) => {
    switch (key) {
        case ')':
            return String(0).padStart(2, '0');;
        case '0':
            return 0;
        case '1':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        case '.':
            return '.';
        case 'Backspace':
            return {key: 'backspace'};
        case '+':
            return {key: 'add'};
        case '=':
            return {key: 'equal'};
        case 'Enter':
            return {key: 'equal'};
        case 'c':
            return {key: 'cDelete'};
        case '-':
            return {key: 'subtract'};
        case '*':
            return {key: 'multi'};
        case '/':
            return {key: 'divid'};
        default:
            break;
    }
}

export default detectKey;