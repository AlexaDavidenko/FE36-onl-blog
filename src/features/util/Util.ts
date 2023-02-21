export const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleDateString('default', { month: 'long' });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${month} ${day}, ${year}`;
}

export const paginate = (current: number, max: number) => {
    if (!current || !max) return null

    let prev = current === 1 ? null : current - 1,
            next = current === max ? null : current + 1,
            items: number[] = [1]

    if (current === 1 && max === 1) return {current, prev, next, items}
    if (current > 4) items.push(-Infinity)

    let r = 2, r1 = current - r, r2 = current + r

    for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

    if (r2 + 1 < max) items.push(-Infinity)
    if (r2 < max) items.push(max)

    return {current, prev, next, items}
};

export const firstLetters = (userName: string) => {
    const names = userName.split(' ');

    return names.reduce((prev, current) => prev + current[0], '');
}