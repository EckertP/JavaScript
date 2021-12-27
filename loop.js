function loop(count, text) {
    if(!text || !count) 
        throw new Error(`${!text ? 'Text is undefined': 'Text is defined'}, ${!count ? 'Count is undefined': 'Count is defined'} `)

    if(!Number.isInteger(count)) 
        return console.error('Inpurt Count is not a Number')

    let times = 0;
    const interval = setInterval(() => {
        times += 1
        if(times >= count)
            return clearInterval(interval)
        console.log(text + ' ' + times)
    }, 1)
}


try {
    loop(10, 'Hello World')
} catch (err) {
    throw new Error(err)
}