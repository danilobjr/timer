export const milliseconds = (h, m, s) => 
    (h || 0) * 60 * 60 * 1000 + (m || 0) * 60 * 1000 + (s || 0) * 1000

export const time = (milliseconds) => {
    const oneHourInMilliseconds = 60 * 60 * 1000;
    const oneMinuteInMilliseconds = 60 * 1000;
    const oneSecondInMilliseconds = 1000;
    const oneHundredthInMilliseconds = 10;
    
    const hoursResult = Math.floor(milliseconds / oneHourInMilliseconds);
    
    const remainingMillisecondsAfterCalculateHours = 
        milliseconds - oneHourInMilliseconds * hoursResult;
        
    const minutesResult = Math.floor(remainingMillisecondsAfterCalculateHours / oneMinuteInMilliseconds);
    
    const remainingMillisecondsAfterCalculateMinutes = 
        remainingMillisecondsAfterCalculateHours - oneMinuteInMilliseconds * minutesResult;
        
    const secondsResult = Math.floor(remainingMillisecondsAfterCalculateMinutes / oneSecondInMilliseconds);

    const remainingMillisecondsAfterCalculateSeconds = 
        remainingMillisecondsAfterCalculateMinutes - oneSecondInMilliseconds * secondsResult;

    const hundredthsResult = Math.floor(remainingMillisecondsAfterCalculateSeconds / oneHundredthInMilliseconds);
    
    return [
        hoursResult,
        minutesResult,
        secondsResult,
        hundredthsResult
    ];
}