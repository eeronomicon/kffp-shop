const compare = (a, b) => {
    const aInt = parseInt(a.sortOrder, 10);
    const bInt = parseInt(b.sortOrder, 10);

    if (aInt < bInt) {
        return -1;
    }

    if (aInt > bInt) {
        return 1;
    }

    return 0;
};

export const sortProducts = products => products.sort(compare);
