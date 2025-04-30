# interview-2025-30-04

Route /exec {
    actionType: 'sendEmail' | 'sendSMS' | 'conditional' | 'loop',
    params: {
        from: string,
        to: string,
        next?: T
    } | 
    {
        phone_number: number,
        next?: T
    } |
    {
        condition: string,
        trueCase?: T,
        falseCase?: T
    } |
    {
        count: number,
        sub: T
    }
} as T