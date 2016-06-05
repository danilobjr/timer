export const time = (milliseconds) => {
    const oneHourInMilliseconds = 60 * 60 * 1000;
    const oneMinuteInMilliseconds = 60 * 1000;
    const oneSecondInMilliseconds = 1000;
    
    const hoursResult = Math.floor(milliseconds / oneHourInMilliseconds);
    
    const remainingMillisecondsAfterCalculateHours = 
        milliseconds - oneHourInMilliseconds * hoursResult;
        
    const minutesResult = Math.floor(remainingMillisecondsAfterCalculateHours / oneMinuteInMilliseconds);
    
    const remainingMillisecondsAfterCalculateMinutes = 
        remainingMillisecondsAfterCalculateHours - oneMinuteInMilliseconds * minutesResult;
        
    const secondsResult = remainingMillisecondsAfterCalculateMinutes / oneSecondInMilliseconds;
    
    return [
        hoursResult,
        minutesResult,
        secondsResult
    ];
}