export function filterCategory(product, subCategory) {
    if (subCategory === '') {
        return true;
    }

    if (product.subCategory === subCategory) {
        return true;
    }

    return false;
}

export function filterColor(product, color) {
    if (color === '') {
        return true;
    }

    if (product.color === color) {
        return true;
    }

    return false;
}

export function filterSize(product, size) {
    if (size === '') {
        return true;
    }

    if (product.size === size) {
        return true;
    }

    return false;
}

export function filterPrice(product, min, max) {
    if (product.price >= min && product.price <= max) {
        return true;
    }

    return false;
}
