function timeConvert(time) {
    const timeArr = time.split(':');
    const period = timeArr[timeArr.length - 1].slice(-2);
    let hour =  timeArr[0];
    
    if(hour === '12' && period === 'AM'){
        hour = '00';
    }else if(period === 'PM' && hour !== '12'){
        hour = +hour + 12
    }

    const minutes = timeArr[1];
    const seconds = timeArr[timeArr.length - 1].slice(0,2);

    
    console.log(`${hour}:${minutes}:${seconds}`)
}

timeConvert('12:01:00AM')
timeConvert('12:01:00PM')
timeConvert('07:01:00PM')
timeConvert('07:01:00PM')