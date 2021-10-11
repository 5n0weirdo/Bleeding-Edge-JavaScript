const add = (...nums) => {
    let total = nums.reduce((x, y) => x + y);

    console.log(total);
}

add(5, 6, 7, 8);