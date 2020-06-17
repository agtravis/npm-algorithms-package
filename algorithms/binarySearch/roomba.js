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

solve
