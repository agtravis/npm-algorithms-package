solve(moves, x, y) {
    let b = 0;
    let a = 0;
    for (const direction of moves) {
        switch (direction) {
            case `NORTH` : ++b;
            break;
            case `SOUTH` : --b;
            break;
            case `EAST` : ++a;
            break;
            default: --a;
        }
    }
    return b === y && a === x;
}

solve(s) {
    const arr = s.split(` `);
    console.log(arr)
    let output = ``;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) === ` ` && (s.charAt(i - 1) === ` ` || !s.charAt(i - 1))) {
            continue;
        } else {
            output += s.charAt(i);
        }
    }
    if (output.charAt(output.length - 1) === ` `) {
        output = output.substring(0, output.length - 1);
    }
    return output;
}


solve(lst0, lst1) {
    let l = 0;
    let r = 0;
    const output = [];
    while (l < lst0.length && r < lst1.length) {
        if (lst0[l] < lst1[r]) {
            output.push(lst0[l]);
            ++l;
        } else {
            output.push(lst1[r]);
            ++r;
        }
    }
    for (let i = r; i < lst1.length; ++i) {
        output.push(lst1[i]);
    }
    for (let i = l; i < lst0.length; ++i) {
        output.push(lst0[i]);
    }
    return output;
}